<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated fadeOut"
  >
    <div class="q-pa-md ubuntu">
      <q-card class="my-card">
        <q-card-section>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              filled
              bg-color="accent"
              color="primary"
              v-model="penulis"
              label="Dari Siapa ? :)"
              hint="Dari Siapa"
              lazy-rules
              :rules="[ (val: string) => val && val.length > 0 || 'Jangan lupa diisi yaa :)']"
            />

            <div class="q-pa-md q-gutter-sm">
              <div>Text</div>
              <q-editor
                v-model="text"
                :dense="$q.screen.lt.md"
                :toolbar="[
                  [
                    {
                      label: $q.lang.editor.align,
                      icon: $q.iconSet.editor.align,
                      fixedLabel: true,
                      list: 'only-icons',
                      options: ['left', 'center', 'right', 'justify'],
                    },
                    {
                      label: $q.lang.editor.align,
                      icon: $q.iconSet.editor.align,
                      fixedLabel: true,
                      options: ['left', 'center', 'right', 'justify'],
                    },
                  ],
                  [
                    'bold',
                    'italic',
                    'strike',
                    'underline',
                    'subscript',
                    'superscript',
                  ],
                  ['token', 'hr', 'link', 'custom_btn'],
                  ['print', 'fullscreen'],
                  [
                    {
                      label: $q.lang.editor.formatting,
                      icon: $q.iconSet.editor.formatting,
                      list: 'no-icons',
                      options: [
                        'p',
                        'h1',
                        'h2',
                        'h3',
                        'h4',
                        'h5',
                        'h6',
                        'code',
                      ],
                    },
                    {
                      label: $q.lang.editor.fontSize,
                      icon: $q.iconSet.editor.fontSize,
                      fixedLabel: true,
                      fixedIcon: true,
                      list: 'no-icons',
                      options: [
                        'size-1',
                        'size-2',
                        'size-3',
                        'size-4',
                        'size-5',
                        'size-6',
                        'size-7',
                      ],
                    },
                    {
                      label: $q.lang.editor.defaultFont,
                      icon: $q.iconSet.editor.font,
                      fixedIcon: true,
                      list: 'no-icons',
                      options: [
                        'default_font',
                        'arial',
                        'arial_black',
                        'comic_sans',
                        'courier_new',
                        'impact',
                        'lucida_grande',
                        'times_new_roman',
                        'verdana',
                      ],
                    },
                    'removeFormat',
                  ],
                  ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

                  ['undo', 'redo'],
                  ['viewsource'],
                ]"
                :fonts="{
                  arial: 'Arial',
                  arial_black: 'Arial Black',
                  comic_sans: 'Comic Sans MS',
                  courier_new: 'Courier New',
                  impact: 'Impact',
                  lucida_grande: 'Lucida Grande',
                  times_new_roman: 'Times New Roman',
                  verdana: 'Verdana',
                }"
              />
            </div>

            <div>
              <q-btn
                label="Submit"
                type="submit"
                color="primary"
                text-color="white"
              />
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />
            </div>
            <q-dialog
              v-model="darkDialog"
              persistent
              transition-show="flip-down"
              transition-hide="flip-up"
            >
              <q-card class="bg-primary text-white">
                <q-bar>
                  <q-space />

                  <q-btn dense flat icon="close" v-close-popup>
                    <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                  </q-btn>
                </q-bar>

                <q-card-section>
                  Yeay berhasil, pesan telah ditambahkan :)
                </q-card-section>
                <q-card-section>
                  <div class="column items-center">
                    <q-icon
                      name="sentiment_very_satisfied"
                      class="column items-center"
                      size="xl"
                    />
                  </div>
                </q-card-section>

                <q-card-actions align="right">
                  <q-btn
                    flat
                    persistent
                    type="reset"
                    label="Ok Deh"
                    color="white"
                    v-close-popup
                  />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useQuasar } from "quasar";
import { collection, addDoc } from "firebase/firestore";
import { db } from "src/boot/firebase";

const $q = useQuasar();

// Reactive data
const penulis = ref("");
const text = ref("");
const darkDialog = ref(false);

// Methods
function submit3() {
  darkDialog.value = true;
  onReset();
}

async function onSubmit() {
  $q.loadingBar.start();

  try {
    await addDoc(collection(db, "pesans"), {
      siapa: penulis.value,
      pesan: text.value,
      status: false,
      time: new Date().toISOString(),
    });

    submit3();
  } catch (error) {
    console.error("Error adding document:", error);
  }

  $q.loadingBar.stop();
}

function onReset() {
  penulis.value = "";
  text.value = "";
}
</script>

<style lang="sass" scoped>
.ubuntu
  font-family: 'ubuntu'
  font-display: swap
</style>
