<template>
  <div>
    <div class="q-pa-md">
      <transition
        appear
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOut"
      >
        <q-table
          title="Daftar Pesan"
          :rows="pesans"
          :columns="columns"
          row-key="id"
          :filter="filter"
          :loading="loading"
          v-model:pagination="pagination"
          :visible-columns="visibleColumns"
          no-data-label="I didn't find anything for you"
          class="bg-white text-primary"
          no-results-label="The filter didn't uncover any results"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="action">
                <div class="q-gutter-sm">
                  <q-btn
                    push
                    round
                    color="blue-5"
                    icon="create"
                    size="sm"
                    @click="edit(props)"
                  >
                    <q-tooltip class="bg-blue-5" :offset="[10, 10]">
                      Edit!
                    </q-tooltip>
                  </q-btn>

                  <q-btn
                    push
                    round
                    color="red-5"
                    icon="delete"
                    size="sm"
                    @click="deleteDialog(props)"
                  >
                    <q-tooltip class="bg-red-5" :offset="[10, 10]">
                      Delete
                    </q-tooltip>
                  </q-btn>
                </div>
              </q-td>

              <q-td key="index" :props="props">
                <q-badge color="primary">
                  {{ props.rowIndex + 1 }}
                </q-badge>
              </q-td>

              <q-td key="siapa" :props="props">
                <q-badge color="primary">
                  {{ props.row.siapa }}
                </q-badge>
              </q-td>

              <q-td key="pesan" :props="props">
                <div class="my-table-details">
                  {{ props.row.pesan.substring(0, 350) }}
                </div>
              </q-td>

              <q-td key="status" :props="props">
                <q-badge color="primary">
                  <div v-if="props.row.status == false">ngga</div>
                  <div v-else>iya</div>
                </q-badge>
                <q-toggle
                  v-model="props.row.status"
                  color="blue"
                  @update:model-value="(val) => updateStatus(props.row.id, val)"
                  checked-icon="check"
                  unchecked-icon="clear"
                />
              </q-td>
            </q-tr>
          </template>

          <template v-slot:top-right>
            <q-select
              v-model="visibleColumns"
              multiple
              borderless
              dense
              options-dense
              :display-value="$q.lang.table.columns"
              emit-value
              map-options
              :options="columns"
              option-value="name"
              style="min-width: 150px"
            />

            <q-input
              borderless
              dense
              debounce="300"
              v-model="filter"
              placeholder="Search"
            >
              <q-space />

              <template v-slot:append>
                <q-icon name="search" />
              </template>

              <template v-slot:no-data="{ icon, message }">
                <div class="full-width row flex-center text-accent q-gutter-sm">
                  <q-icon size="2em" name="sentiment_dissatisfied" />
                  <span> Well this is sad... {{ message }} </span>
                  <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
                </div>
              </template>
            </q-input>
          </template>
        </q-table>
      </transition>
      <!-- Edit -->
      <q-dialog v-model="medium">
        <q-card class="text-black bg-white">
          <q-bar>
            <div>Edit Data</div>

            <q-space />

            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-card-section>
            <q-form @submit="updateData()" @reset="onReset" class="q-gutter-md">
              <q-input
                filled
                bg-color="accent"
                color="primary"
                v-model="editedData.penulis"
                label="Penulis"
                hint="Penulis"
                lazy-rules
                :rules="[ (val: string) => val && val.length > 0 || 'Jangan lupa diisi yaa :)']"
              />

              <q-input
                v-model="editedData.text"
                filled
                bg-color="accent"
                color="primary"
                outlined
                type="textarea"
                label="Pesannya apa ? (yang baik - bak aja yaa)"
                dense
                :rules="[ (val: string) => val.length <= 350 || 'Maksimal 350 karakter ya, nanti disambung lagi aja :)',
                    (val: string) => val.length >0 || 'jangan lupa diisi yaa']"
              />

              <q-card-actions align="right">
                <q-btn
                  label="Reset"
                  type="reset"
                  color="accent"
                  text-color="primary"
                />
                <q-btn
                  label="Update"
                  type="submit"
                  color="accent"
                  text-color="primary"
                  class="q-ml-sm"
                  v-close-popup
                />
              </q-card-actions>
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>

      <!-- Delete -->
      <q-dialog v-model="confirmDelete" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <q-avatar icon="delete" color="primary" text-color="white" />
            <span class="q-ml-sm"
              >Kamu akan menghapusnya untuk selama - lamanya ?</span
            >
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Ga jadi deh" color="primary" v-close-popup />
            <q-btn
              flat
              label="Iya beneran"
              color="primary"
              v-close-popup
              @click="deletePesan()"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useQuasar } from "quasar";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "src/boot/firebase";

const $q = useQuasar();

interface Pesan {
  id: string;
  siapa: string;
  pesan: string;
  status: boolean;
  time: string;
}

// Reactive data
const pagination = ref({
  sortBy: null as string | null,
  descending: false,
  page: 1,
  rowsPerPage: 5,
});
const selectedId = ref<string | null>(null);
const confirmDelete = ref(false);
const loading = ref(false);
const filter = ref("");
const pesans = ref<Pesan[]>([]);

const columns = [
  {
    name: "action",
    align: "left" as const,
    label: "Aksi",
    sortable: true,
  },
  {
    name: "index",
    align: "left" as const,
    label: "No",
    field: (row: Pesan) => row.id,
    sortable: true,
  },
  {
    name: "siapa",
    label: "Siapa",
    align: "left" as const,
    field: (row: Pesan) => row.siapa,
    sortable: true,
  },
  {
    name: "pesan",
    align: "left" as const,
    label: "Pesan",
    field: (row: Pesan) => row.pesan,
    sortable: true,
    headerStyle: "width: 200px",
  },
  {
    name: "status",
    align: "left" as const,
    label: "Publish ?",
    field: (row: Pesan) => row.status,
    sortable: true,
  },
];

const visibleColumns = ref(["action", "index", "siapa", "pesan", "status"]);

const medium = ref(false);
const editedData = ref({
  penulis: "",
  text: "",
});

// Methods
async function updateStatus(id: string, status: boolean) {
  try {
    await updateDoc(doc(db, "pesans", id), { status });
  } catch (error) {
    console.error("Error updating status:", error);
  }
}

function deleteDialog(props: { row: Pesan }) {
  confirmDelete.value = true;
  selectedId.value = props.row.id;
}

function edit(props: { row: Pesan; rowIndex: number }) {
  medium.value = true;
  selectedId.value = props.row.id;
  editedData.value.penulis = props.row.siapa;
  editedData.value.text = props.row.pesan;
}

async function updateData() {
  if (!selectedId.value) return;

  try {
    await updateDoc(doc(db, "pesans", selectedId.value), {
      siapa: editedData.value.penulis,
      pesan: editedData.value.text,
    });

    $q.notify({
      color: "accent",
      textColor: "white",
      icon: "cloud_done",
      message: "Yeay Arsip Berhasil Diupdate :)",
      position: "center",
      timeout: 5000,
    });
  } catch (error) {
    console.error("Error updating:", error);
  }
}

async function deletePesan() {
  if (!selectedId.value) return;

  try {
    await deleteDoc(doc(db, "pesans", selectedId.value));

    $q.notify({
      color: "negative",
      textColor: "white",
      icon: "cloud_done",
      message: "Yeay Pesan Berhasil Dihapus  :)",
      position: "center",
      timeout: 5000,
    });
  } catch (error) {
    console.error("Error deleting:", error);
  }
}

function onReset() {
  editedData.value.penulis = "";
  editedData.value.text = "";
}

// Lifecycle
onMounted(() => {
  // Listen for pesans from Firestore
  onSnapshot(collection(db, "pesans"), (snapshot) => {
    pesans.value = snapshot.docs.map(
      (docSnap) =>
        ({
          id: docSnap.id,
          ...docSnap.data(),
        } as Pesan)
    );
  });
});
</script>

<style>
.my-table-details {
  font-size: 0.85em;
  font-style: italic;
  width: 800px;
  max-width: 800px;
  white-space: normal;
  color: #555;
  margin-top: 4px;
}
.grid-style-transition {
  transition: transform 0.28s, background-color 0.28s;
}
</style>
