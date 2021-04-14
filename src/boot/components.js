// import something here
import Vue from 'vue'

// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload, {
//   lazyComponent: true
// })

// import VueParticles from 'vue-particles'
// Vue.use(VueParticles)
// import LottieAnimation from 'lottie-vuejs' // import lottie-vuejs

// Vue.use(LottieAnimation);
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
// ..

import {
  AddressbarColor
} from 'quasar'

// import mojs from '@mojs/core'
// Vue.use(mojs)
import SPesan from 'app/src/components/S-Pesan.vue'

import SPreloader from 'app/src/components/S-Preloader.vue'
Vue.component('s-preloader', SPreloader)

// import SPreloader2 from 'app/src/components/S-Preloader2.vue'
// Vue.component('s-preloader2', SPreloader2)

Vue.component('s-pesan', SPesan)
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default (/* { app, router, Vue ... } */) => {
  // something to do
  AddressbarColor.set('#aa96da')
  AOS.init()
}
