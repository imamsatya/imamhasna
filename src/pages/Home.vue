<template>
  <div>
    <!-- <div v-if="animate = true"> halo</div> -->
    <!-- <lazy-component @show="handler"> -->
    <!-- <lazy-component > -->
    <!-- <s-preloader2 /> -->
    <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated infinite autoplay
      control-color="primary" navigation padding arrows class="bg-secondary text-primary  rounded-borders"
      style="min-height: 475px">
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-icon name="local_florist" size="56px" />
        <div v-if="$q.platform.is.desktop" class="q-mt-md text-center futura " style="font-size: 20px">
          <p>"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri,
            supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang.
            Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."</p>
          <br>
          <p>Ar Rum : 21</p>

        </div>
        <div v-if="$q.platform.is.mobile" class="q-mt-md text-center futura " style="font-size: 14px">

          <p>"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri,
            supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang.
            Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."</p>

          <p>Ar Rum : 21</p>

        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="favorite" size="56px" />
        <div v-if="$q.platform.is.desktop" class="q-mt-md text-center futura" style="font-size: 20px">
          <p>"Dan orang - orang yang berkata: "Ya Tuhan kami, anugrahkanlah kepada kami, istri-istri(pasangan) kami dan
            keturunan
            kami sebagai penyenang hati (kami), dan jadikanlah kami imam bagi orang - orang yang bertakwa"</p>
          <br>
          <p>Al Furqon : 74</p>
        </div>
        <div v-if="$q.platform.is.mobile" class="q-mt-md text-center futura" style="font-size: 16px">
          <p>"Dan orang - orang yang berkata: "Ya Tuhan kami, anugrahkanlah kepada kami, istri-istri(pasangan) kami dan
            keturunan
            kami sebagai penyenang hati (kami), dan jadikanlah kami imam bagi orang - orang yang bertakwa"</p>

          <p>Al Furqon : 74</p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="nights_stay" size="56px" />
        <div v-if="$q.platform.is.desktop" class="q-mt-md text-center futura" style="font-size: 24px">
          <p>"Dan segala sesuatu Kami ciptakan berpasang – pasangan supaya kamu mengingat kebesaran Allah."</p>
          <br>
          <p>Az Zariyat : 49</p>
        </div>
        <div v-if="$q.platform.is.mobile" class="q-mt-md text-center futura" style="font-size: 20px">
          <p>"Dan segala sesuatu Kami ciptakan berpasang – pasangan supaya kamu mengingat kebesaran Allah."</p>

          <p>Az Zariyat : 49</p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="annur" class="column no-wrap flex-center">
        <q-icon name="sync" size="56px" />
        <div v-if="$q.platform.is.desktop" class="q-mt-md text-center futura" style="font-size: 24px">
          <p>"...Dan wanita - wanita yang baik adalah untuk laki - laki yang baik dan laki - laki yang baik adalah untuk
            wanita-wanita yang baik (pula)...."</p>
          <br>
          <p>An Nur : 26</p>
        </div>
        <div v-if="$q.platform.is.mobile" class="q-mt-md text-center futura" style="font-size: 16px">
          <p>"...Dan wanita - wanita yang baik adalah untuk laki - laki yang baik dan laki - laki yang baik adalah untuk
            wanita-wanita yang baik (pula)...."</p>
          <br>
          <p>An Nur : 26</p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-icon name="public" size="56px" />
        <div v-if="$q.platform.is.desktop" class="q-mt-md text-center futura" style="font-size: 24px">
          <p>"...Ya Allah, berikanlah kepada kami kebaikan di dunia, berikan pula kebaikan di akhirat dan lindungilah
            kami dari siksa neraka"</p>
          <br>

          <p>Al Baqarah : 201</p>
        </div>
        <div v-if="$q.platform.is.mobile" class="q-mt-md text-center futura" style="font-size: 18px">
          <p>"...Ya Allah, berikanlah kepada kami kebaikan di dunia, berikan pula kebaikan di akhirat dan lindungilah
            kami dari siksa neraka"</p>

          <p>Al Baqarah : 201</p>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <!-- </lazy-component> -->
    <!-- Wedding -->
    <div class="row background-tes text-center " >
        <svg xmlns="http://www.w3.org/2000/svg"  width="100%" viewBox="0 0 1440 320">
        <path fill="#CCF2FF" fill-opacity="1" d="M0,192L30,176C60,160,120,128,180,122.7C240,117,300,139,360,160C420,181,480,203,540,186.7C600,171,660,117,720,90.7C780,64,840,64,900,101.3C960,139,1020,213,1080,250.7C1140,288,1200,288,1260,261.3C1320,235,1380,181,1410,154.7L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
        </svg>
      <div class="col-12 " data-aos="fade-up">
        <br>
        <br>
          <q-intersection transition="" once>
            <div class=" text-h3 text-negative pacifico animate__animated animate__zoomIn animate__slowerer ">
              <div class=""> - Menikah -</div>
            </div>
          </q-intersection>
          <br>
          <br>
          <q-intersection transition="" once>
            <div v-if="$q.platform.is.desktop" class="row justify-center">
              <div class="col-4 text-center">
               <div class="hvr-float">
                <q-tooltip
          transition-show="flip-right"
          transition-hide="flip-left"
          anchor="top middle" self="top middle"
          content-class="bg-grey-1 futura " content-style="font-size: 14px;color: #0086B3;" :offset="[55, 55]"
        >
         <div class="futura"> Mohon doanya ya semuanya :) </div>
        </q-tooltip>
                  <img style="
                    -webkit-transform: scaleX(-1);
                    transform: scaleX(-1);
                    " src="../statics/a1.png" class="animate__animated animate__fadeInLeft " alt="" width="208px" height="208px" srcset="">
                </div>
              </div>
              <div class="col-4 text-center">
                 <q-tooltip
          transition-show="flip-right"
          transition-hide="flip-left"
          anchor="top middle" self="top middle"
          content-class="bg-grey-1 " content-style="font-size: 14px;color: #C20A75;" :offset="[55, 55]"
           max-width="300px"
        >
          <div class="futura"> Semoga kami bisa menjadi keluarga sakinah mawaddah warahmah. Aamiin :) </div>
        </q-tooltip>
                <div class="hvr-float">
                  <img style="
                      -webkit-transform: scaleX(-1);
                          transform: scaleX(-1);
                            " src="https://res.cloudinary.com/imamsatya/image/upload/c_scale,q_100,w_200/v1600609119/imamhasna/muslimah1_rtvdh5.png" class="animate__animated animate__fadeInRight " alt="" width="200px" height="200px"
                    srcset="">
                </div>
              </div>
            </div>
            <div v-if="$q.platform.is.mobile" class="row justify-center">
              <div class="col-6 text-center">
                <q-tooltip class="futura"
          transition-show="flip-right"
          transition-hide="flip-left"
          anchor="top middle" self="top middle"
          max-width="150px"
          :offset="[50, 50]"
          content-class="bg-grey-1 " content-style="font-size: 14px;color: #0086B3;"
          :hide-delay="2500"
        >
    <div class="futura"> Mohon doanya ya semuanya :) </div>
        </q-tooltip>
                <div class="hvr-float">
                  <img style="
                      -webkit-transform: scaleX(-1);
                      transform: scaleX(-1);
                    " src="../statics/a1.png" class="animate__animated animate__fadeInLeft " alt="" width="150px" height="150px" srcset="">
                </div>
              </div>
              <div class="col-6 text-center">
                <q-tooltip
          transition-show="flip-right"
          transition-hide="flip-left"
          anchor="top middle" self="top middle"
          max-width="300px"
          :offset="[50, 50]"
          content-class="bg-grey-1 " content-style="font-size: 14px;color:  #C20A75;"
          :hide-delay="2500"
        >
          <div class="futura"> Semoga kami bisa menjadi keluarga sakinah mawaddah warahmah. Aamiin :) </div>
        </q-tooltip>
                <div class="hvr-float">
                  <img style="
                      -webkit-transform: scaleX(-1);
                        transform: scaleX(-1);
                      " src="../statics/muslimah1.png" class="animate__animated animate__fadeInRight " alt="" width="150px" height="150px"
                    srcset="">
                </div>
              </div>
            </div>
          </q-intersection>
          <div class=" text-body1 text-negative futura">
            <br>
            <p>Bismillahirrahmanirrahiim <br>
              Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan <br>
              Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami</p>
          </div>
          <br><br>
          <q-intersection transition="" once>
            <div class="  text-h4 text-negative pacifico animate__animated animate__fadeIn animate__slower">
              Hasna Fahria Yasmin
            </div>
          </q-intersection>
          <br>
          <div class=" text-body1 text-negative futura">
            <p>Putri dari Bapak Supriyono (Rahimahullah) & Ibu Dewi Maria Elva</p>

          </div>

          <q-intersection transition="" once>
            <img v-if="$q.platform.is.mobile" src="../statics/icons/cute.svg"
              class="animate__animated animate__swing animate__slower " alt="" width="30%" height="30%" srcset="">
            <img v-if="$q.platform.is.desktop" src="../statics/icons/cute.svg"
              class="animate__animated animate__swing animate__slower hvr-buzz-out" alt="" width="7%" height="7%"
              srcset="">
          </q-intersection>

          <br>
          <!-- animate__animated animate__fadeInRight -->
          <q-intersection transition="" once>
            <div class=" text-h4 text-negative pacifico animate__animated animate__fadeIn animate__slower ">
              Imam Satya Wedhatama </div>
          </q-intersection>
          <br>
          <div class=" text-body1 text-negative futura">
            <p>Putra dari Bapak Ngadino & Ibu Tri Wulandari</p><br><br>

            <p>Merupakan suatu kehormatan dan kebahagiaan bagi kami <br>
              apabila Bapak/Ibu/Saudara/teman - teman berkenan hadir,<br>
              untuk memberikan doa restu kepada kami :)</p>
          </div>
          <br>
      </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1440 320">
          <path fill="#CCF2FF " fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
    </div>

    <!-- Yuk Hadir -->

    <div class=" bg-secondary text-center ">

      <div  class="col-12  text-center" data-aos="fade-up">

        <br>
        <q-intersection  transition="" once>
          <div class="text-h4  text-primary pacifico animate__animated animate__zoomIn animate__slower">- Yuk Hadir -
          </div>
        </q-intersection> <br><br>
        <p class="text-primary text-h5 text-weight-bold futura animate__animated animate__fadeIn animate__slower">Ahad,
          20 Desember 2020</p>
          <br>
        <!-- V1 -->
        <!-- <p class="text-primary futura">Sabtu, 19 Desember 2020 | 09:00</p>
        <lazy-component>
          <div class="col-8 bg-primary">
            <div class="iframe-c">
              <iframe class="iframe" title="myMap"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.738465719744!2d106.83586374649967!3d-6.1657680339266525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5043d80af5b%3A0x606cc4c31fe3db80!2sBadan%20Pusat%20Statistik!5e0!3m2!1sen!2sid!4v1573795678744!5m2!1sen!2sid"
                width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
            </div>
          </div>
        </lazy-component> -->
        <div class="row justify-around q-col-gutter-lg">
          <div  class="col-12 col-md-6 column items-center futura" >
            <q-intersection transition="" once>
              <div class="hvr-float">
                <q-card
                  class="my-cardA text-negative shadow-15 items-center text-body1 animate__animated animate__fadeInLeft animate__slower">
                  <q-card-section>
                    <div class="text-h4 q-mb-xs pacifico text-negative">Akad</div>

                  </q-card-section>
                  <!-- <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" /> -->
                  <q-img src="../statics/icons/handshake.svg" class="" height="40%" width="40%" />

                  <q-card-section>
                    <q-btn push fab color="red" icon="place" class="absolute"
                      style="top: 0; right: 12px; transform: translateY(-50%);" @click="mapAkad = true" />

                    <q-dialog v-model="mapAkad">
                      <q-card class="my-cardB">

                        <iframe class="iframe" title="myMap"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.8005853713566!2d110.21351231477622!3d-7.487258394599172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8f6aa5ee45b3%3A0xdc07f0e500ac48d6!2sGedung%20Jenderal%20Achmad%20Yani%20Magelang!5e0!3m2!1sen!2sid!4v1593327610736!5m2!1sen!2sid"
                          frameborder="0" style="border:0;" allowfullscreen=""></iframe>

                      </q-card>
                    </q-dialog>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    <q-list>
                      <q-item clickable>
                        <q-item-section avatar>
                          <q-icon color="negative" name="home" />
                        </q-item-section>

                        <q-item-section>
                          <q-item-label>Gedung Jenderal Achmad Yani Magelang</q-item-label>
                          <q-item-label caption>Jl. Jend. Gatot Soebroto, Kec. Magelang Selatan., Kota Magelang, Jawa Tengah 59214 </q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item clickable>
                        <q-item-section avatar>
                          <q-icon color="negative" name="alarm_on" />
                        </q-item-section>

                        <q-item-section>
                          <q-item-label>9:00 - 10:00 </q-item-label>
                          <q-item-label caption>Keluarga Inti</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-card-section>
                </q-card>
              </div>
            </q-intersection>
          </div>
          <div class="col-12 col-md-6 column items-center futura" >
            <q-intersection transition="" once>
              <div class="hvr-float">
                <q-card
                  class="my-cardA text-primary shadow-15 items-center text-body1 animate__animated animate__fadeInRight animate__slower">
                  <q-card-section>
                    <div class="text-h4 q-mb-xs pacifico ">Walimah</div>

                  </q-card-section>
                  <!-- <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" /> -->
                  <q-img src="../statics/icons/ice-cream.svg" height="40%" width="40%" />

                  <q-card-section>
                    <q-btn push fab color="red" icon="place" class="absolute"
                      style="top: 0; right: 12px; transform: translateY(-50%);" @click="mapWalimah = true" />

                    <q-dialog v-model="mapWalimah">
                      <q-card class="my-cardB">

                        <iframe class="iframe" title="myMap"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.8005853713566!2d110.21351231477622!3d-7.487258394599172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8f6aa5ee45b3%3A0xdc07f0e500ac48d6!2sGedung%20Jenderal%20Achmad%20Yani%20Magelang!5e0!3m2!1sen!2sid!4v1593327610736!5m2!1sen!2sid"
                          frameborder="0" style="border:0;" allowfullscreen=""></iframe>

                      </q-card>
                    </q-dialog>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    <q-list>
                      <q-item clickable>
                        <q-item-section avatar>
                          <q-icon color="primary" name="home" />
                        </q-item-section>

                        <q-item-section>
                          <q-item-label>Gedung Jenderal Achmad Yani Magelang</q-item-label>
                          <q-item-label caption>Jl. Jend. Gatot Soebroto, Kec. Magelang Selatan., Kota Magelang, Jawa Tengah 59214 </q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item clickable>
                        <q-item-section avatar>
                          <q-icon color="primary" name="alarm_on" />
                        </q-item-section>

                        <q-item-section>
                          <q-item-label >
                             {{this.sesiwalimah}}
                          </q-item-label>
                          <q-item-label caption>{{this.tamuwalimah}}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-card-section>
                </q-card>
              </div>
            </q-intersection>
          </div>
        </div>
        <br>
        <br>

      </div>
    </div>

    <!-- dialog map -->

    <!-- Pesan -->
    <div class="row bg-warning text-center">
      <div class="col-12 " >
        <br>
        <!-- animate__animated animate__zoomIn -->
        <q-intersection transition="" once>
          <div class="text-h4 text-negative pacifico animate__animated animate__zoomIn animate__slower "> - Terima Kasih
            Pesan/Doanya -
          </div>
        </q-intersection>
        <br>

        <!-- <div class="q-gutter-xl row justify-center"> -->
        <s-pesan ></s-pesan>
      </div><br>
    </div>
    <!-- Sosmed -->

    <!-- Hubungi Kami -->

    <!-- Pesan untuk Kami :) -->
    <div class="bg-secondary " >

      <div class="row bg-secondary ">
        <div class="col">
          <br>
          <!--  -->
          <q-intersection transition="" once>
            <p class="text-h5 text-primary text-center pacifico animate__animated animate__zoomIn animate__slower"> -
              Ada Pesan Untuk
              Kami ? - </p>
          </q-intersection>
          <div class="row bg-grey-2 justify-center " >
          <!-- <div class="row bg-grey-2 justify-center bg-image-adapesan" > -->

            <!-- Form -->
            <div class="col-9 bg-image-adapesan futura">
              <br>
              <!-- <div class="text-h4 text-primary">Hubungi Kami</div><br> -->
              <div class="items-center" align="center">
                <q-input v-model="siapa" filled  color="primary" outlined label="Dari siapa nih ? :)"
                  dense :rules="[ val => val.length <= 50 || 'Maksimal 50 karakter ya, nanti disambung lagi aja :)',
                    val => val.length >0 || 'jangan lupa diisi yaa']">
                </q-input>

                <br>
                <!-- Isi pesan -->
                <q-input v-model="pesan" filled  color="primary" outlined type="textarea"
                  label="Pesannya apa ? (yang baik - baik aja yaa)" dense :rules="[ val => val.length <= 350 || 'Maksimal 350 karakter ya, nanti disambung lagi aja :)',
                    val => val.length >0 || 'jangan lupa diisi yaa']" />
                <br>
                <q-btn push color="primary" text-color="white" label="Kirim" class="hvr-float-button" icon="send"
                  @click="kirim()" />
              </div>
              <br><br>
            </div>
            <br>

          </div>
        </div>
        <br>
        <!-- </div> -->
        <!-- <div class="row"> -->
      </div>
    </div>

    <q-page-sticky position="bottom-left" :offset="[18, 18]">
      <img v-if="pokemon==true && pokemonHit % 5 !== 0 && pokemonHit < 50" style="
        -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
" src="../statics/Gif/pichu2.gif" class="animate__animated animate__fadeInLeft" alt="" width="50%" height="50%"
        srcset="">

      <img v-if="pokemon==true && pokemonHit % 5 == 0 && pokemonHit < 50" style="
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
" src="../statics/Gif/pichu3.gif" class="animate__animated animate__fadeInLeft" alt="" width="35%" height="35%"
        srcset="">

      <img v-if="pokemon==true && pokemonHit >= 50" style="
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
" src="../statics/Gif/pikachu.gif" class="animate__animated animate__fadeInLeft" alt="" width="50%" height="50%"
        srcset="">
    </q-page-sticky>

    <!-- floating button -->

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab icon="music_note" glossy direction="up" color="negative">
        <!-- <q-fab-action  @click="prevMusic()" color="primary" icon="ion-skip-backward" /> -->
        <q-fab-action @click="music()" color="primary" :icon="iconStatus" />

        <!-- <q-fab-action    @click="nextMusic()" color="primary" icon="ion-skip-forward" /> -->
      </q-fab>
    </q-page-sticky>

    <!-- <q-dialog v-model="alert">
      <q-card class="futura text-primary bg-secondary">
        <q-card-section>
          <div class="text-h6">Halo {{this.siapa}} :)</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Makasih banget telah memberi pesan kepada kami :D
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup @click="clearPesan()" />
        </q-card-actions>
      </q-card>
    </q-dialog> -->

    <q-dialog v-model="alert" class="futura text-primary bg-secondary" persistent transition-show="flip-down"
      transition-hide="flip-up">
      <q-card class="bg-primary text-white">
        <q-bar>

          <q-space />

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6">Halo {{this.siapa}} :)</div>
          <br>
          Makasih banget telah memberi pesan kepada kami
        </q-card-section>
        <q-card-section>
          <div class="column items-center">
            <q-icon name="sentiment_very_satisfied" class="column items-center" size='xl' />
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat persistent type="reset" label="Ok Deh" color="white" v-close-popup @click="clearPesan()" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- <q-dialog v-model="errorDialog">
      <q-card class="futura text-negative bg-warning">
        <q-card-section >
          <div class="text-h6">Ada yang belum lengkap</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Sepertinya ada yang belum terisi di formnya, jangan lupa diisi yaa :)
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="negative" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog> -->

    <q-dialog v-model="errorDialog" class="futura text-negative bg-warning" persistent transition-show="flip-down"
      transition-hide="flip-up">
      <q-card class="bg-negative text-white">
        <q-bar>
          <!-- <q-icon name="sentiment_very_satisfied" />
                  <div>Halo ...</div> -->

          <q-space />

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6">Ada Error</div>
          <br>
          Pastikan formnya terisi semua dan tidak ada pesan error yaa :)
        </q-card-section>
        <q-card-section>
          <div class="column items-center">
            <q-icon name="sentiment_very_satisfied" class="column items-center" size='xl' />
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <!-- <q-btn flat label="Cancel" color="white" v-close-popup /> -->
          <q-btn flat persistent type="reset" label="Ok Deh" color="white" v-close-popup @click="clearPesan()" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Google Map -->

    <!-- Yuk Hadir -->

  </div>
</template>
<script>
  export default {
    data () {
      return {
        tamuwalimah: 'Tamu Bapak Ngadino dan Bu Wulan',
        sesiwalimah: 'Sesi 1 | 11:00 - 12:00',
        mapWalimah: false,
        mapAkad: false,
        animate: true,
        pokemonHit: 0,
        pokemon: false,
        audio: null,
        iconStatus: 'play_arrow',
        musicStatus: false,
        slide: 'style',
        siapa: null,
        pesan: null,
        alert: false,
        errorDialog: false
      }
    },
    firestore () {
      // var user = this.$firebase.auth().currentUser
      return {

        pesans: this.$firebase.firestore().collection('pesans').where('status', '==', true),
        pesans2: this.$firebase.firestore().collection('pesans')

        // user_arsip: this.$firebase.firestore().collection('data_arsip').where('user_id', '==', user.uid)
      }
    },
    // mounted: function () {
    //       this.$nextTick(function () {
    //           if (this.audio !== null) {
    //             console.log('tidak null',this.audio.curentTime)
    //           }else{
    //             console.log('masih null')
    //           }
    //       })
    //   },
    // watch: {
    //   // audio (newValue, oldValue) {
    //   //   console.log('new', newValue)
    //   //   console.log('old', oldValue)
    //   //   console.log(newValue.currentTime)
    //   //   if (newValue.currentTime > 0) {
    //   //     console.log('lebih dair 0')
    //   //   } else {
    //   //     console.log('asdas')
    //   //   }
    //   // }

    // },
    mounted: function () {
      this.animate = false
      // this.mojs()
      this.music()
      this.music()

       this.$nextTick(function () {
        window.setInterval(() => {
              const a = this.sesiwalimah
              if (a === 'Sesi 1 | 11:00 - 12:00') {
                this.sesiwalimah = 'Sesi 2 | 12:30 - 13:30'
                this.tamuwalimah = 'Tamu Bu Dewi'
              }
              if (a === 'Sesi 2 | 12:30 - 13:30') {
                this.sesiwalimah = 'Sesi 3 | 13:45 - 14:45'
                this.tamuwalimah = 'Tamu Bu Dewi, Hasna dan Imam'
              }
              if (a === 'Sesi 3 | 13:45 - 14:45') {
                this.sesiwalimah = 'Sesi 1 | 11:00 - 12:00'
                this.tamuwalimah = 'Tamu Bapak Ngadino dan Bu Wulan'
              }
              // console.log('a')
              // console.log('ini sesiwalimah', this.sesiwalimah)
        }, 5000)
        // console.log(this.sesiwalimah)
      })
    },
    methods: {
      musicreverse () {
        // this.pokemonHit += 1
        // console.log('pokemonHit', this.pokemonHit)
        if (this.iconStatus === 'play_arrow') {
          this.iconStatus = 'pause'
        } else {
          this.iconStatus = 'play_arrow'
        }

        if (this.musicStatus === false) {
          this.musicStatus = true
          if (this.pokemonHit % 5 === 0) {
          //  const path = 'statics/3or.mp3'
            const path =
              'https://vgmdownloads.com/soundtracks/pokemon-omega-ruby-and-alpha-sapphire-super-music-complete-nintendo-3ds/htbxuuiweo/1-23%20Petalburg%20City.mp3'

            this.audio = new Audio(path) // path to file
            this.audio.play()
            this.animateX = 'animate__animated animate__swing animate__infinite animate__fast animate__delay-2s'
            this.pokemon = true
          } else {
            //  const path = 'statics/1or.mp3'
            const path =
              'https://vgmdownloads.com/soundtracks/pokemon-omega-ruby-and-alpha-sapphire-super-music-complete-nintendo-3ds/cbaurzxwvi/1-05 Littleroot Town.mp3'

            this.audio = new Audio(path) // path to file
            this.audio.play()
            this.animateX = 'animate__animated animate__fadeIn animate__infinite animate__slower animate__delay-2s'
            this.pokemon = true
          }
        } else {
          this.audio.pause()
          // this.audio.currentTime = 0;
          this.animateX = null
          this.pokemon = false
          this.musicStatus = false
          // this.audio = null;
        }
      },
      music () {
        //  this.audio.currentTime = 0;
        this.pokemonHit += 1
        // console.log('pokemonHit', this.pokemonHit)
        if (this.iconStatus === 'play_arrow') {
          this.iconStatus = 'pause'
        } else {
          this.iconStatus = 'play_arrow'
        }

        if (this.musicStatus === false) {
          this.musicStatus = true
          if (this.pokemonHit % 5 === 0) {
            // const path = 'statics/1or.mp3'
            const path =
              'https://vgmdownloads.com/soundtracks/pokemon-omega-ruby-and-alpha-sapphire-super-music-complete-nintendo-3ds/cbaurzxwvi/1-05 Littleroot Town.mp3'

            this.audio = new Audio(path) // path to file
            this.audio.play()
            this.animateX = 'animate__animated animate__fadeIn animate__infinite animate__slower animate__delay-2s'
            this.pokemon = true
          } else {
            //  const path = 'statics/3or.mp3'
            const path =
              'https://vgmdownloads.com/soundtracks/pokemon-omega-ruby-and-alpha-sapphire-super-music-complete-nintendo-3ds/htbxuuiweo/1-23%20Petalburg%20City.mp3'

            this.audio = new Audio(path) // path to file
            this.audio.play()
            this.animateX = 'animate__animated animate__swing animate__infinite animate__fast animate__delay-2s'
            this.pokemon = true
          }
        } else {
          this.audio.pause()
          // this.audio.currentTime = 0;
          this.animateX = null
          this.pokemon = false
          this.musicStatus = false
          // this.audio = null;
        }
      },
      // handler (component) {
      //   console.log('this component is showing')
      // },
      clearPesan () {
        this.siapa = null
        this.pesan = null
        this.alert = false
        this.errorDialog = false
      },
      async kirim () {
        this.$q.loadingBar.start()
        console.log(this.pesan)
        console.log(this.siapa)
        if (this.pesan === null || this.siapa === null || this.pesan === '' || this.siapa === '') {
          this.alert = false
          this.errorDialog = true
        }
        if (this.pesan.length > 350 || this.siapa.length > 50) {
          this.errorDialog = true
        } else {
          await this.$firestore.pesans2.add({

            siapa: this.siapa,
            pesan: this.pesan,
            status: false,
            time: new Date().toISOString()
          })
          this.alert = true
        }

        this.$q.loadingBar.stop()
      }
    },
    computed: {
      animateX: {
        set (val) {
          this.$store.state.things.animatedName = val
        },
        get () {
          return this.$store.state.things.animatedName
        }
      }
    }
  }

</script>
<style lang="sass" scoped>
.my-cardB
  width: 100%
  max-width: 750px
  height: 550px
  max-height: 450px
  border-radius: 20px

.my-cardA
  width: 350px
  max-width: 350px
  height: 470px
  max-height: 470px
  border-radius: 20px

.my-card
  width: 350px
  max-width: 350px
  height: 350px
  max-height: 350px

.pacifico
  font-family: 'pacifico'
  font-display: swap

.futura
  font-family: 'futura'
  font-display: swap

.iframe
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%

.bg-image-adapesan
  background-image:     url("../statics/icons/paper-plane.svg")
  background-size: 100% 100%

</style>
<style>
.background-tes {
  background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%);
}

.hvr-float-button {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-float-button:hover, .hvr-float:focus, .hvr-float:active {
  -webkit-transform: translateY(-10px);
  transform: translateY(-10px);
}

.hvr-float {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-float:hover, .hvr-float:focus, .hvr-float:active {
  -webkit-transform: translateY(-20px);
  transform: translateY(-20px);
}

/* Buzz Out */
@-webkit-keyframes hvr-buzz-out {
  10% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  20% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  30% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  40% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  50% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  60% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  70% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  80% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  90% {
    -webkit-transform: translateX(1px) rotate(0);
    transform: translateX(1px) rotate(0);
  }
  100% {
    -webkit-transform: translateX(-1px) rotate(0);
    transform: translateX(-1px) rotate(0);
  }
}
@keyframes hvr-buzz-out {
  10% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  20% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  30% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  40% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  50% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  60% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  70% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  80% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  90% {
    -webkit-transform: translateX(1px) rotate(0);
    transform: translateX(1px) rotate(0);
  }
  100% {
    -webkit-transform: translateX(-1px) rotate(0);
    transform: translateX(-1px) rotate(0);
  }
}
.hvr-buzz-out {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.hvr-buzz-out:hover, .hvr-buzz-out:focus, .hvr-buzz-out:active {
  -webkit-animation-name: hvr-buzz-out;
  animation-name: hvr-buzz-out;
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}
</style>
