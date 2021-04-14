<template>
<div class="bg-image-adapesanx">
  <div class="q-pa-md bg-grey-2">
    <div class="row  justify-center q-gutter-xl" style="min-height: 400px">
      <q-intersection once v-for="(pesan, index) in visibleArtikels" :key="pesan['.key']"
        v-bind:visibleArtikels="visibleArtikels" v-bind:currentPage="currentPage" v-bind:artikel="pesan"
         >
         <br>
          <!-- @mouseover.native="hover = true"   @mouseleave.native="hover = false" :class="slide" @mouseover="mouseOver2(index)" -->
          <div class="hvr-float">
        <q-card v-if="index % 2 == 0" :class="slide"  >
          <q-card-section class="futura">
            <div class="" v-html="pesan.pesan.substring(0,350)"></div>
            <br>
            <div class="text-subtitle2 "> {{pesan.siapa}}</div>
          </q-card-section>
        </q-card>
        <q-card v-else :class="slide2" align="between" >
          <q-card-section class="futura " align="between">
            <div class="" v-html="pesan.pesan.substring(0,350)"></div>
            <br>
            <div class="text-subtitle2 "> {{pesan.siapa}}</div>
          </q-card-section>
        </q-card>
        </div>
      </q-intersection>
    </div>
    <br>
    <br>
    <div v-if="totalPages() > 0" class="pagination-wraper futura">

      <div class="text-h5 text-negative">
        <q-btn push  color="negative" icon="keyboard_arrow_left"  v-if="showPreviousLink()"
          class="pagination-btn hvr-float-button" v-on:click="updatePage2(currentPage - 1)" />

        {{currentPage + 1}} of {{totalPages()}}

        <q-btn push  color="negative" icon-right="keyboard_arrow_right"  v-if="showNextLink()"
          class="pagination-btn  hvr-float-button" v-on:click="updatePage(currentPage + 1)" />
      </div>

    </div>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        pesanOtomatis: 30000,
        slide: 'bg-secondary text-primary my-card shadow-15 items-center text-body1 animate__animated animate__fadeInRight',
        slide2: 'bg-warning text-negative my-card shadow-15 text-body1  animate__animated animate__fadeInRight',
        currentPage: 0,
        pageSize: 3,
        visibleArtikels: [],
        length: null

        // pagination custom

      }
    },
    beforeMount: function () {
      this.updateVisibleArtikels()
    },
    firestore () {
      // var user = this.$firebase.auth().currentUser
      return {

        pesans: this.$firebase.firestore().collection('pesans').where('status', '==', true)

        // user_arsip: this.$firebase.firestore().collection('data_arsip').where('user_id', '==', user.uid)
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        // let a = this.currentPage

        window.setInterval(() => {
              // console.log('max 2', Math.ceil(this.pesans.length / this.pageSize))
          this.updatePage(this.currentPage + 1)
          // console.log(a, this.currentPage)
          // a = a + 1
          // console.log('a', a, 'currentPage', this.currentPage)
          if (this.currentPage === Math.ceil(this.pesans.length / this.pageSize)) {
            // a = 0
            this.currentPage = 0
          }
        }, this.pesanOtomatis)
      })
      if (this.$q.platform.is.mobile === true) {
        this.pageSize = 1
        this.pesanOtomatis = 15000
      }
    //  this.shuffle()
    },
    methods: {
        shuffle (array) {
       for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    },
// },
      // mouseOver2 (index) {
      //   // console.log('mouseover',index)
      //    this.slide = 'bg-secondary text-primary my-card shadow-15 items-center text-body1 animate__animated animate__fadeInRight'
      // },

      // mouseOver () {
      //   this.n = 15
      // },
      // mouseLeave () {
      //   // this.n = 1
      //    this.slide = 'bg-secondary text-primary my-card shadow-15 items-center text-body1 animate__animated animate__fadeInRight'
      // },

      clickCallback (pageNum) {
        // console.log(pageNum)
        this.updatePage(pageNum)
      },
      updatePage2 (pageNumber) {
        this.slide = 'bg-secondary text-primary my-card shadow-15 items-center text-body1 animate__animated animate__fadeInLeft'
        this.slide2 = 'bg-warning text-negative my-card shadow-15 text-body1  animate__animated animate__fadeInLeft'
        this.currentPage = pageNumber
        this.updateVisibleArtikels2()
      },
      updatePage (pageNumber) {
        this.slide = 'bg-secondary text-primary my-card shadow-15 items-center text-body1 animate__animated animate__fadeInRight'
        this.slide2 = 'bg-warning text-negative my-card shadow-15 text-body1  animate__animated animate__fadeInRight'
        this.currentPage = pageNumber
        this.updateVisibleArtikels2()
      },
      totalPages () {
        // console.log(this.artikels.length / this.pageSize)

        const a = Math.ceil(this.pesans.length / this.pageSize)

        // if (a == 0) {
        //   a =1;
        // }
        // console.log('a', a)
        return a
      },
      showPreviousLink () {
        return this.currentPage !== 0
      },
      showNextLink () {
        return this.currentPage !== (this.totalPages() - 1)
      },
      async updateVisibleArtikels () {
        // console.log('artikels2', this.artikels2)
        // console.log('artikel', this.artikels)

        await this.$firebase.firestore().collection('pesans').get().then(snapshot => {
          // console.log('size', snapshot.size)
          this.length = snapshot.size
          // console.log('this.length', this.length)
        })

        this.shuffle(this.pesans)
        // console.log('length', this.length)
        // this.pesans = this.shuffle(this.pesans)
        // this.artikels = this.artikels
        this.visibleArtikels = this.pesans.slice(this.currentPage * this.pageSize, (this.currentPage * this
          .pageSize) + this.pageSize)
        // if we have 0 visibleArtikels, go back a page

        if (this.visibleArtikels.length === 0 && this.currentPage > 0) {
          this.updatePage(this.currentPage - 1)
        }
        // console.log(this.visibleArtikels)
      },
      async updateVisibleArtikels2 () {
        // console.log('artikels2', this.artikels2)
        // console.log('artikel', this.artikels)

        await this.$firebase.firestore().collection('pesans').get().then(snapshot => {
          // console.log('size', snapshot.size)
          this.length = snapshot.size
          // console.log('this.length', this.length)
        })
          // this.shuffle(this.pesans)
        // console.log('length', this.length)
        // this.pesans = this.shuffle(this.pesans)
        // this.artikels = this.artikels
        this.visibleArtikels = this.pesans.slice(this.currentPage * this.pageSize, (this.currentPage * this
          .pageSize) + this.pageSize)
        // if we have 0 visibleArtikels, go back a page
        if (this.visibleArtikels.length === 0 && this.currentPage > 0) {
          this.updatePage(this.currentPage - 1)
        }
        // console.log(this.visibleArtikels)
      }
    }
  }
</script>
<style lang="sass" scoped>
.my-card
  width: 350px
  max-width: 350px
  max-height: 350px
  border-radius: 20px

.ubuntu
  font-family: 'ubuntu'
  font-display: swap

.futura
  font-family: 'futura'
  font-display: swap

.bg-image-adapesanx
  background-image:     url("../statics/undraw_empty_street_sfxm.svg")
  background-size: 100% 100%

</style>
