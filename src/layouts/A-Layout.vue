<template>
  <div>
    <div class="q-pa-md futura">
      <q-layout view="hHh Lpr fFf">
        <q-header elevated class="bg-negative">
          <q-toolbar>
            <q-btn
              color="white"
              flat
              @click="drawer = !drawer"
              round
              dense
              icon="menu"
            />
            <q-toolbar-title class="text-white">hi App</q-toolbar-title>
            <q-btn
              color="white"
              flat
              @click="$q.fullscreen.toggle()"
              :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
              :label="$q.fullscreen.isActive ? '' : ''"
            />
            <q-btn
              push
              color="white"
              text-color="negative"
              label="Logout"
              @click="logout"
            />
          </q-toolbar>
        </q-header>

        <q-drawer
          v-model="drawer"
          show-if-above
          :mini="miniState"
          @mouseover="miniState = false"
          @mouseout="miniState = true"
          :width="200"
          :breakpoint="500"
          bordered
          class="bg-warning text-negative"
        >
          <q-scroll-area class="fit">
            <q-list padding>
              <q-item :active="menuTabel" clickable v-ripple @click="goTabel">
                <q-item-section avatar>
                  <q-icon name="table_chart" color="negative" />
                </q-item-section>

                <q-item-section> Daftar Pesan </q-item-section>
              </q-item>

              <q-item :active="menuHome" clickable v-ripple @click="goHome">
                <q-item-section avatar>
                  <q-icon name="assignment" color="negative" />
                </q-item-section>

                <q-item-section> Form </q-item-section>
              </q-item>

              <q-item :active="menuAbout" clickable v-ripple @click="goAbout">
                <q-item-section avatar>
                  <q-icon name="info_outline" color="negative" />
                </q-item-section>

                <q-item-section> About </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>
        </q-drawer>

        <q-page-container>
          <router-view />
        </q-page-container>
      </q-layout>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { signOut } from "firebase/auth";
import { auth } from "src/boot/firebase";

const router = useRouter();

// Reactive data
const menuHome = ref(true);
const menuTabel = ref(false);
const menuAbout = ref(false);
const drawer = ref(false);
const miniState = ref(true);

// Methods
function goHome() {
  menuHome.value = true;
  menuTabel.value = false;
  menuAbout.value = false;
  router.push("/form");
}

function goTabel() {
  menuHome.value = false;
  menuTabel.value = true;
  menuAbout.value = false;
  router.push("/tabel");
}

function goAbout() {
  menuHome.value = false;
  menuTabel.value = false;
  menuAbout.value = true;
  router.push("/about");
}

async function logout() {
  try {
    await signOut(auth);
    router.push("/login");
  } catch (error) {
    console.error("Logout error:", error);
  }
}
</script>

<style lang="sass" scoped>
.text-pinkku
  color: #f38181

.bg-pinkku
  background: #f38181

.text-kuningku
  color: #f0decb

.bg-kuningku
  background: #f0decb

.my-card
  width: 350px
  max-width: 350px
  max-height: 350px

.futura
  font-family: 'futura'
</style>
