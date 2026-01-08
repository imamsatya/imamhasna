<template>
  <div class="bg-image-adapesanx">
    <div class="q-pa-md bg-grey-2">
      <div class="row justify-center q-gutter-xl" style="min-height: 400px">
        <q-intersection
          once
          v-for="(pesan, index) in visiblePesans"
          :key="pesan.id"
        >
          <br />
          <div class="hvr-float">
            <q-card
              v-if="index % 2 == 0"
              :class="slide"
              :style="{
                animationDelay:
                  (isReverse ? pageSize - 1 - index : index) * 0.2 + 's',
              }"
            >
              <q-card-section class="futura">
                <div class="" v-html="pesan.pesan.substring(0, 350)"></div>
                <br />
                <div class="text-subtitle2">{{ pesan.siapa }}</div>
              </q-card-section>
            </q-card>
            <q-card
              v-else
              :class="slide2"
              align="between"
              :style="{
                animationDelay:
                  (isReverse ? pageSize - 1 - index : index) * 0.2 + 's',
              }"
            >
              <q-card-section class="futura" align="between">
                <div class="" v-html="pesan.pesan.substring(0, 350)"></div>
                <br />
                <div class="text-subtitle2">{{ pesan.siapa }}</div>
              </q-card-section>
            </q-card>
          </div>
        </q-intersection>
      </div>
      <br />
      <br />
      <div v-if="totalPages > 0" class="pagination-wraper futura">
        <div class="text-h5 text-negative">
          <q-btn
            push
            color="negative"
            icon="keyboard_arrow_left"
            v-if="showPreviousLink"
            class="pagination-btn hvr-float-button"
            @click="updatePage(currentPage - 1, true)"
          />

          {{ currentPage + 1 }} of {{ totalPages }}

          <q-btn
            push
            color="negative"
            icon-right="keyboard_arrow_right"
            v-if="showNextLink"
            class="pagination-btn hvr-float-button"
            @click="updatePage(currentPage + 1, false)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeMount, watch } from "vue";
import { useQuasar } from "quasar";
import { collection, query, where, onSnapshot } from "firebase/firestore";
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
const pesanOtomatis = ref(30000);
const slide = ref(
  "bg-secondary text-primary my-card shadow-15 items-center text-body1 animate__animated animate__fadeInRight"
);
const slide2 = ref(
  "bg-warning text-negative my-card shadow-15 text-body1  animate__animated animate__fadeInRight"
);
const currentPage = ref(0);
const pageSize = ref(3);
const pesans = ref<Pesan[]>([]);
const visiblePesans = ref<Pesan[]>([]);
const isReverse = ref(false);

// Computed
const totalPages = computed(() => {
  return Math.ceil(pesans.value.length / pageSize.value);
});

const showPreviousLink = computed(() => currentPage.value !== 0);
const showNextLink = computed(() => currentPage.value !== totalPages.value - 1);

// Methods
function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function updatePage(pageNumber: number, isLeft: boolean) {
  isReverse.value = isLeft;
  if (isLeft) {
    slide.value =
      "bg-secondary text-primary my-card shadow-15 items-center text-body1 animate__animated animate__fadeInLeft";
    slide2.value =
      "bg-warning text-negative my-card shadow-15 text-body1  animate__animated animate__fadeInLeft";
  } else {
    slide.value =
      "bg-secondary text-primary my-card shadow-15 items-center text-body1 animate__animated animate__fadeInRight";
    slide2.value =
      "bg-warning text-negative my-card shadow-15 text-body1  animate__animated animate__fadeInRight";
  }
  currentPage.value = pageNumber;
  updateVisiblePesans();
}

function updateVisiblePesans() {
  visiblePesans.value = pesans.value.slice(
    currentPage.value * pageSize.value,
    currentPage.value * pageSize.value + pageSize.value
  );

  if (visiblePesans.value.length === 0 && currentPage.value > 0) {
    updatePage(currentPage.value - 1, true);
  }
}

// Watch for pesans changes
watch(
  pesans,
  () => {
    updateVisiblePesans();
  },
  { deep: true }
);

// Lifecycle
onBeforeMount(() => {
  updateVisiblePesans();
});

onMounted(() => {
  // Adjust for mobile
  if ($q.platform.is.mobile === true) {
    pageSize.value = 1;
    pesanOtomatis.value = 15000;
  }

  // Auto-scroll
  setInterval(() => {
    updatePage(currentPage.value + 1, false);
    if (currentPage.value >= totalPages.value) {
      currentPage.value = 0;
    }
  }, pesanOtomatis.value);

  // Listen for pesans from Firestore
  const q = query(collection(db, "pesans"), where("status", "==", true));
  onSnapshot(q, (snapshot) => {
    const data = snapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as Pesan)
    );
    pesans.value = shuffle(data);
  });
});
</script>

<style lang="sass" scoped>
.my-card
  width: 350px
  max-width: 350px
  max-height: 350px
  border-radius: 20px

  @media (max-width: 599px)
    width: 90%
    margin: 0 auto

.ubuntu
  font-family: 'ubuntu'
  font-display: swap

.futura
  font-family: 'futura'
  font-display: swap

.bg-image-adapesanx
  background-image: url("../statics/undraw_empty_street_sfxm.svg")
  background-size: 100% 100%
</style>
