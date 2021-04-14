<template>

  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css" />
      <!-- <link rel="stylesheet" href="../css/Hover-master/Hover-master/css/hover-min.css.css"> -->
      <!-- <q-toolbar class="bg-white text-primary shadow-2 rounded-borders">
      <q-btn class="pacifico" flat no-caps label="Imam & Hasna" @click="goHome()"/>
      <q-space />

      <q-tabs v-model="tabX" shrink>
        <q-tab name="home" @click="goHome()"  no-caps label="Home" />

        <q-tab name="artikel" @click="goArtikel()" no-caps label="Artikel" />

      </q-tabs>
    </q-toolbar> -->

      <div class="row no-wrap shadow-5 pacifico text-center">

        <q-toolbar class="col-6 bg-secondary text-primary">
          <q-toolbar-title :class="animateX"> <div class="hvr-underline-from-center"> Imam </div></q-toolbar-title>
        </q-toolbar>
        <q-toolbar class="col-6 bg-warning text-negative">
          <q-toolbar-title :class="animateX"> <div class="hvr-underline-from-center2">Hasna </div></q-toolbar-title>
          <!-- <q-toolbar-title> <img src="../statics/Gif/transparent-sprite-charmander-3.gif" alt="" width="10%" height="10%" srcset=""></q-toolbar-title> -->
        </q-toolbar>
      </div>

    </q-header>

    <q-page-container>
      <router-view />

    </q-page-container>

    <div class="bg-white text-grey-8 futura">
      <div class="grey darken-3 white-text text-center">

        <div class="white-text">
          <p></p>
          <p class="white-text "> Luaskan ilmu, luaskan manfaat <br>
            [ ] dengan <span class="animate__animated animate__fadeIn animate__infinite text-red hvr-grow"> ❤ </span>
            <!-- <q-spinner-hearts class="animated 2s infinite fadeIn" color="red" size="2.5em" /> -->
            di <br>Tolitoli/Palu/Jakarta/Magelang</p>
        </div>

        <div>
          ©2020 — Imam Satya Wedhatama
          <p>

          Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          </p>

        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
  export default {
    name: 'MyLayout',

    // data () {
    //   return {
    //     leftDrawerOpen: false,
    //     tab: 'home',
    //     position: 300

    //   }
    // },
    // methods: {
    //   scroll () {
    //     this.$refs.scrollArea.setScrollPosition(this.position)
    //     this.position = Math.floor(Math.random() * 1001) * 20
    //   },

    //   animateScroll () {
    //     this.$refs.scrollArea.setScrollPosition(this.position, 300)
    //     this.position = Math.floor(Math.random() * 1001) * 20
    //   },
    //   goHome () {
    //     this.$router.push('/')
    //   },
    //   goArtikel () {
    //     this.$router.push('/artikel')
    //   }

    // },
    computed: {
      tabX: {
        set (val) {
          this.$store.state.things.tab = val
        },
        get () {
          return this.$store.state.things.tab
        }
      },
      animateX: {
        set (val) {
          this.$store.state.things.animatedName = val
        },
        get () {
          return this.$store.state.things.animatedName
        }
      },
      animateX2: {
        set (val) {
          this.$store.state.things.animatedName2 = val
        },
        get () {
          return this.$store.state.things.animatedName2
        }
      }
    }

  }

</script>
<style lang="sass" scoped>
  .ubuntu
    font-family: 'ubuntu'
    font-display: swap

  .pacifico
    font-family: 'pacifico'
    font-display: swap

  .futura
    font-family: 'futura'
    font-display: swap

</style>
<style>
.hvr-grow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
}

/* hover Imam */
.hvr-underline-from-center {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}
.hvr-underline-from-center:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 51%;
  right: 51%;
  bottom: 0;
  background: #0086B3;
  height: 4px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before {
  left: 0;
  right: 0;
}
/* hover hasna */
.hvr-underline-from-center2 {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}
.hvr-underline-from-center2:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 51%;
  right: 51%;
  bottom: 0;
  background: #C20A75;
  height: 4px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-underline-from-center2:hover:before, .hvr-underline-from-center2:focus:before, .hvr-underline-from-center2:active:before {
  left: 0;
  right: 0;
}
</style>
