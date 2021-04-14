<template>
  <div>

<!--=====================================================================================================
============================== Halooo !!! ngintip aja bro ================================================
==========================================================================================================

NYARI APA NIH? HEHE...
SELAMAT MENCARI SESUATU YANG DICARI :D

IT'S ONLY WITH THE HEART THAT ONE CAN SEE RIGHTLY , WHAT IS ESSENTIAL IS INVISIBLE TO THE EYE

==========================================================================================================
==========================================================================================================
=======================================================================================================
-->
    <div class="q-pa-md futura">
      <q-layout view="hHh Lpr fFf">
        <q-header elevated class="bg-negative">
          <q-toolbar>
            <q-btn color="white" flat @click="drawer = !drawer" round dense icon="menu" />
            <q-toolbar-title class="text-white">hi App</q-toolbar-title>
            <q-btn color="white" flat @click="$q.fullscreen.toggle()"
              :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
              :label="$q.fullscreen.isActive ? '' : ''" />
                <q-btn push color="white" text-color="negative" label="Logout" @click="logout"/>
          </q-toolbar>
        </q-header>

        <q-drawer v-model="drawer" show-if-above :mini="miniState" @mouseover="miniState = false"
          @mouseout="miniState = true" :width="200" :breakpoint="500" bordered content-class="bg-warning text-negative">
          <q-scroll-area class="fit">
            <q-list padding>

              <q-item :active="menuTabel" clickable v-ripple @click="goTabel">
                <q-item-section avatar>
                  <q-icon name="table_chart" color="negative"/>
                </q-item-section>

                <q-item-section>
                  Daftar Pesan
                </q-item-section>
              </q-item>

              <q-item :active="menuHome" clickable v-ripple @click="goHome" >
                <q-item-section avatar>
                  <q-icon name="assignment" color="negative"/>
                </q-item-section>

                <q-item-section >
                  Form
                </q-item-section>
              </q-item>

              <q-item :active="menuAbout" clickable v-ripple @click="goAbout">
                <q-item-section avatar>
                  <q-icon name="info_outline" color="negative" />
                </q-item-section>

                <q-item-section  >
                  About
                </q-item-section>
              </q-item>

              <!-- <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="send" />
                </q-item-section>

                <q-item-section>
                  Send
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="drafts" />
                </q-item-section>

                <q-item-section>
                  Drafts
                </q-item-section>
              </q-item> -->
            </q-list>
          </q-scroll-area>
        </q-drawer>

        <q-page-container>

          <router-view />
        </q-page-container>
<!--
      <q-footer class="bg-accent text-grey-8 futura">
          <div class="grey darken-3 white-text text-center">
            <div class="white-text">
              <p></p>
              <p class="white-text"> Luaskan ilmu, luaskan manfaat <br>
                [ ] dengan  <span class="animated infinite fadeIn text-primary" > ❤ </span>

                di Toli-toli</p>
            </div>

            <div>
              ©2019 — Imam Satya Wedhatama
              <p></p>
            </div>
          </div>
        </q-footer>-->
      </q-layout>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      menuHome: true,
      menuTabel: false,
      menuAbout: false,
      left: false,
      drawer: false,
      miniState: true
    }
  },
  methods: {
    goHome () {
      this.menuHome = true
      this.menuTabel = false
      this.menuAbout = false
      this.$router.push('/form')
    },
    goTabel () {
      this.menuHome = false
      this.menuTabel = true
      this.menuAbout = false
      this.$router.push('/tabel')
    },
    goAbout () {
      this.menuHome = false
      this.menuTabel = false
      this.menuAbout = true
      this.$router.push('/about')
    },
    logout: async function () {
      try {
        await this.$firebase.auth().signOut()
        this.$router.push('/login')
      } catch (error) {
        alert(error.message)
      }
    }
  }
}

</script>
<style lang="stylus" scoped>

.text-pinkku {
  color: #f38181;
}
.bg-pinkku {
  background: #f38181;
}
.text-kuningku {
  color: #f0decb;
}
.bg-kuningku {
  background: #f0decb;
}

</style>
<style lang="sass" scoped>
.my-card
  width: 350px
  max-width: 350px
  max-height: 350px

.futura
  font-family: 'futura'
</style>
