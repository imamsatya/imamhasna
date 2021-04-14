<template>

  <div id="q-app">
    <s-preloader />
    <transition appear>

      <router-view />
    </transition>

     <!-- <div >Loading </div> -->
  </div>
</template>

<script >

export default {
  name: 'App',
  data () {
    return {
      // tes:true
    }
  },
  mounted () {
    // this.tes=false
  }

  }

</script>
