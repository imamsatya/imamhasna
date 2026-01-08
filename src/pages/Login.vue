<template>
  <div id="a" class="bg-accent">
    <br /><br />
    <div class="q-pa-md">
      <div class="q-gutter-y-md column items-center text-primary pacifico">
        <h3>hi App</h3>
      </div>
    </div>

    <transition
      appear
      enter-active-class="animated zoomIn"
      leave-active-class="animated fadeOut"
    >
      <div class="q-pa-md">
        <div class="q-gutter-y-md column items-center">
          <q-card>
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="login" label="Login" />
              <q-tab name="register" label="Register" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="login">
                <div class="text-h6">Login</div>
                <br />

                <q-input
                  filled
                  bg-color="secondary"
                  color="primary"
                  standout
                  v-model="emailLogin"
                  type="email"
                  placeholder="email"
                  hint="Tulis email lengkap ya, contoh: imam.satya@bps.go.id"
                >
                  <template v-slot:prepend>
                    <q-icon name="mail" />
                  </template>
                </q-input>
                <br />

                <q-input
                  filled
                  bg-color="secondary"
                  color="primary"
                  standout
                  v-model="passwordLogin"
                  v-on:keyup.enter="login"
                  :type="isPwd ? 'password' : 'text'"
                  hint="Hayo passwordnya apa"
                  placeholder="Password"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
                <br />

                <q-btn
                  color="primary"
                  class="full-width q-mt-md"
                  icon-right="send"
                  label="Login"
                  @click="login"
                />
              </q-tab-panel>

              <q-tab-panel name="register">
                <div class="text-h6">Register</div>
                <br />
                <q-input
                  filled
                  bg-color="secondary"
                  color="primary"
                  standout
                  v-model="emailRegister"
                  type="email"
                  placeholder="email"
                  hint="Tulis email lengkap ya, contoh: imam.satya@bps.go.id"
                >
                  <template v-slot:prepend>
                    <q-icon name="mail" />
                  </template>
                </q-input>
                <br />

                <q-input
                  filled
                  bg-color="secondary"
                  color="primary"
                  standout
                  v-model="passwordRegisterT"
                  :type="isPwd ? 'password' : 'text'"
                  hint="Hayo passwordnya apa"
                  placeholder="Password"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
                <br />

                <q-input
                  filled
                  bg-color="secondary"
                  color="primary"
                  standout
                  v-model="passwordRegister"
                  :type="isPwdx ? 'password' : 'text'"
                  hint="Sekali lagi"
                  placeholder="Password"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwdx ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwdx = !isPwdx"
                    />
                  </template>
                </q-input>
                <br />

                <q-btn
                  color="primary"
                  class="full-width q-mt-md"
                  icon-right="send"
                  label="Register"
                  @click="register"
                />
              </q-tab-panel>
            </q-tab-panels>
          </q-card>

          <q-dialog
            v-model="darkDialog"
            persistent
            transition-show="flip-down"
            transition-hide="flip-up"
          >
            <q-card class="bg-primary text-white">
              <q-bar>
                <q-icon name="warning" />
                <div>Verifikasi Email</div>

                <q-space />

                <q-btn dense flat icon="close" v-close-popup>
                  <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                </q-btn>
              </q-bar>

              <q-card-section>
                Pendaftaran berhasil, silakan verifikasi email kamu terlebih
                dahulu :)
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "src/boot/firebase";

const $q = useQuasar();
const router = useRouter();

// Reactive data
const tab = ref("login");
const passwordLogin = ref("");
const isPwd = ref(true);
const isPwdx = ref(true);
const emailLogin = ref("");
const emailRegister = ref("");
const passwordRegisterT = ref("");
const passwordRegister = ref("");
const darkDialog = ref(false);

// Methods
async function register() {
  const emailRegisterF = emailRegister.value;

  if (passwordRegisterT.value === passwordRegister.value) {
    try {
      await createUserWithEmailAndPassword(
        auth,
        emailRegisterF,
        passwordRegister.value
      );
      await signInWithEmailAndPassword(
        auth,
        emailRegisterF,
        passwordRegister.value
      );

      const user = auth.currentUser;
      if (user) {
        await sendEmailVerification(user);
      }

      darkDialog.value = true;
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      $q.notify({
        color: "red-6",
        textColor: "white",
        icon: "highlight_off",
        message: errorMessage,
        position: "center",
        timeout: 1000,
      });
    }
  } else {
    $q.notify({
      color: "red-6",
      textColor: "white",
      icon: "highlight_off",
      message: "passwordnya kok beda :(",
      position: "center",
      timeout: 1000,
    });
  }
}

async function login() {
  const emailLoginF = emailLogin.value;

  // untuk nyoba2
  if (emailLogin.value === "imam.satya") {
    try {
      await signInWithEmailAndPassword(
        auth,
        emailLogin.value + "@bps.go.id",
        passwordLogin.value
      );
      $q.notify({
        color: "green-6",
        textColor: "white",
        icon: "cloud_done",
        message: "Yeay Berhasil, Selamat nyoba nyoba :3",
        position: "center",
        timeout: 3000,
      });
      router.push("/tabel");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      $q.notify({
        color: "red-6",
        textColor: "white",
        icon: "highlight_off",
        message: errorMessage,
        position: "center",
        timeout: 1000,
      });
    }
  } else {
    try {
      await signInWithEmailAndPassword(auth, emailLoginF, passwordLogin.value);
      const user = auth.currentUser;

      if (user?.emailVerified === true) {
        $q.notify({
          color: "green-6",
          textColor: "white",
          icon: "cloud_done",
          message: "Yeay  Berhasil Login :)",
          position: "center",
          timeout: 1000,
        });
        router.push("/tabel");
      } else {
        $q.notify({
          color: "red-6",
          textColor: "white",
          icon: "highlight_off",
          message: "Email belum terverifikasi :(",
          position: "center",
          timeout: 3000,
        });
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      $q.notify({
        color: "red-6",
        textColor: "white",
        icon: "highlight_off",
        message: errorMessage,
        position: "center",
        timeout: 1000,
      });
    }
  }
}
</script>

<style lang="sass" scoped>
.pacifico
  font-family: 'pacifico'
  font-display: swap

.futura
  font-family: 'futura'
  font-display: swap
</style>
