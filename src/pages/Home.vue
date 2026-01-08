<template>
  <div>
    <q-carousel
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      infinite
      autoplay
      control-color="primary"
      navigation
      padding
      arrows
      class="bg-secondary text-primary rounded-borders"
      style="min-height: 475px"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-icon name="local_florist" size="56px" />
        <div
          v-if="$q.platform.is.desktop"
          class="q-mt-md text-center futura"
          style="font-size: 20px"
        >
          <p>
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
            dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
            kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda bagi kaum yang berfikir."
          </p>
          <br />
          <p>Ar Rum : 21</p>
        </div>
        <div
          v-if="$q.platform.is.mobile"
          class="q-mt-md text-center futura"
          style="font-size: 14px"
        >
          <p>
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
            dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
            kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda bagi kaum yang berfikir."
          </p>

          <p>Ar Rum : 21</p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="favorite" size="56px" />
        <div
          v-if="$q.platform.is.desktop"
          class="q-mt-md text-center futura"
          style="font-size: 20px"
        >
          <p>
            "Dan orang - orang yang berkata: "Ya Tuhan kami, anugrahkanlah
            kepada kami, istri-istri(pasangan) kami dan keturunan kami sebagai
            penyenang hati (kami), dan jadikanlah kami imam bagi orang - orang
            yang bertakwa"
          </p>
          <br />
          <p>Al Furqon : 74</p>
        </div>
        <div
          v-if="$q.platform.is.mobile"
          class="q-mt-md text-center futura"
          style="font-size: 16px"
        >
          <p>
            "Dan orang - orang yang berkata: "Ya Tuhan kami, anugrahkanlah
            kepada kami, istri-istri(pasangan) kami dan keturunan kami sebagai
            penyenang hati (kami), dan jadikanlah kami imam bagi orang - orang
            yang bertakwa"
          </p>

          <p>Al Furqon : 74</p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="nights_stay" size="56px" />
        <div
          v-if="$q.platform.is.desktop"
          class="q-mt-md text-center futura"
          style="font-size: 24px"
        >
          <p>
            "Dan segala sesuatu Kami ciptakan berpasang – pasangan supaya kamu
            mengingat kebesaran Allah."
          </p>
          <br />
          <p>Az Zariyat : 49</p>
        </div>
        <div
          v-if="$q.platform.is.mobile"
          class="q-mt-md text-center futura"
          style="font-size: 20px"
        >
          <p>
            "Dan segala sesuatu Kami ciptakan berpasang – pasangan supaya kamu
            mengingat kebesaran Allah."
          </p>

          <p>Az Zariyat : 49</p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="annur" class="column no-wrap flex-center">
        <q-icon name="sync" size="56px" />
        <div
          v-if="$q.platform.is.desktop"
          class="q-mt-md text-center futura"
          style="font-size: 24px"
        >
          <p>
            "...Dan wanita - wanita yang baik adalah untuk laki - laki yang baik
            dan laki - laki yang baik adalah untuk wanita-wanita yang baik
            (pula)...."
          </p>
          <br />
          <p>An Nur : 26</p>
        </div>
        <div
          v-if="$q.platform.is.mobile"
          class="q-mt-md text-center futura"
          style="font-size: 16px"
        >
          <p>
            "...Dan wanita - wanita yang baik adalah untuk laki - laki yang baik
            dan laki - laki yang baik adalah untuk wanita-wanita yang baik
            (pula)...."
          </p>
          <br />
          <p>An Nur : 26</p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-icon name="public" size="56px" />
        <div
          v-if="$q.platform.is.desktop"
          class="q-mt-md text-center futura"
          style="font-size: 24px"
        >
          <p>
            "...Ya Allah, berikanlah kepada kami kebaikan di dunia, berikan pula
            kebaikan di akhirat dan lindungilah kami dari siksa neraka"
          </p>
          <br />

          <p>Al Baqarah : 201</p>
        </div>
        <div
          v-if="$q.platform.is.mobile"
          class="q-mt-md text-center futura"
          style="font-size: 18px"
        >
          <p>
            "...Ya Allah, berikanlah kepada kami kebaikan di dunia, berikan pula
            kebaikan di akhirat dan lindungilah kami dari siksa neraka"
          </p>

          <p>Al Baqarah : 201</p>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <!-- Wedding -->
    <div class="row background-tes text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#CCF2FF"
          fill-opacity="1"
          d="M0,192L30,176C60,160,120,128,180,122.7C240,117,300,139,360,160C420,181,480,203,540,186.7C600,171,660,117,720,90.7C780,64,840,64,900,101.3C960,139,1020,213,1080,250.7C1140,288,1200,288,1260,261.3C1320,235,1380,181,1410,154.7L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
      <div class="col-12" data-aos="fade-up">
        <br />
        <br />
        <q-intersection transition="" once>
          <div
            class="text-h3 text-negative pacifico animate__animated animate__zoomIn animate__slowerer"
          >
            <div class="">- Menikah -</div>
          </div>
        </q-intersection>
        <br />
        <br />
        <q-intersection transition="" once>
          <div v-if="$q.platform.is.desktop" class="row justify-center">
            <div class="col-4 text-center">
              <div class="hvr-float">
                <q-tooltip
                  transition-show="flip-right"
                  transition-hide="flip-left"
                  anchor="top middle"
                  self="top middle"
                  content-class="bg-grey-1 futura "
                  content-style="font-size: 14px;color: #0086B3;"
                  :offset="[55, 55]"
                >
                  <div class="futura">Mohon doanya ya semuanya :)</div>
                </q-tooltip>
                <img
                  style="-webkit-transform: scaleX(-1); transform: scaleX(-1)"
                  src="../statics/a1.png"
                  class="animate__animated animate__fadeInLeft"
                  alt=""
                  width="208px"
                  height="208px"
                  srcset=""
                />
              </div>
            </div>
            <div class="col-4 text-center">
              <q-tooltip
                transition-show="flip-right"
                transition-hide="flip-left"
                anchor="top middle"
                self="top middle"
                content-class="bg-grey-1 "
                content-style="font-size: 14px;color: #C20A75;"
                :offset="[55, 55]"
                max-width="300px"
              >
                <div class="futura">
                  Semoga kami bisa menjadi keluarga sakinah mawaddah warahmah.
                  Aamiin :)
                </div>
              </q-tooltip>
              <div class="hvr-float">
                <img
                  style="
                    -webkit-transform: scaleX(-1);
                    transform: scaleX(-1);
                    border-radius: 50%;
                  "
                  src="../statics/muslimah1.png"
                  class="animate__animated animate__fadeInRight"
                  alt=""
                  width="200px"
                  height="200px"
                  srcset=""
                />
              </div>
            </div>
          </div>
          <div v-if="$q.platform.is.mobile" class="row justify-center">
            <div class="col-6 text-center">
              <q-tooltip
                class="futura"
                transition-show="flip-right"
                transition-hide="flip-left"
                anchor="top middle"
                self="top middle"
                max-width="150px"
                :offset="[50, 50]"
                content-class="bg-grey-1 "
                content-style="font-size: 14px;color: #0086B3;"
                :hide-delay="2500"
              >
                <div class="futura">Mohon doanya ya semuanya :)</div>
              </q-tooltip>
              <div class="hvr-float">
                <img
                  style="-webkit-transform: scaleX(-1); transform: scaleX(-1)"
                  src="../statics/a1.png"
                  class="animate__animated animate__fadeInLeft"
                  alt=""
                  width="150px"
                  height="150px"
                  srcset=""
                />
              </div>
            </div>
            <div class="col-6 text-center">
              <q-tooltip
                transition-show="flip-right"
                transition-hide="flip-left"
                anchor="top middle"
                self="top middle"
                max-width="300px"
                :offset="[50, 50]"
                content-class="bg-grey-1 "
                content-style="font-size: 14px;color:  #C20A75;"
                :hide-delay="2500"
              >
                <div class="futura">
                  Semoga kami bisa menjadi keluarga sakinah mawaddah warahmah.
                  Aamiin :)
                </div>
              </q-tooltip>
              <div class="hvr-float">
                <img
                  style="
                    -webkit-transform: scaleX(-1);
                    transform: scaleX(-1);
                    border-radius: 50%;
                  "
                  src="../statics/muslimah1.png"
                  class="animate__animated animate__fadeInRight"
                  alt=""
                  width="150px"
                  height="150px"
                  srcset=""
                />
              </div>
            </div>
          </div>
        </q-intersection>
        <div class="text-body1 text-negative futura q-px-md">
          <br />
          <p>
            Bismillahirrahmanirrahiim <br />
            Maha suci Allah yang telah menciptakan makhluk-Nya
            berpasang-pasangan <br />
            Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami
          </p>
        </div>
        <br /><br />
        <q-intersection transition="" once>
          <div
            :class="$q.platform.is.mobile ? 'text-h5' : 'text-h4'"
            class="text-negative pacifico animate__animated animate__fadeIn animate__slower q-px-md"
          >
            Hasna Fahria Yasmin
          </div>
        </q-intersection>
        <br />
        <div class="text-body1 text-negative futura q-px-md">
          <p>Putri dari Bapak Supriyono (Rahimahullah) & Ibu Dewi Maria Elva</p>
        </div>

        <q-intersection transition="" once>
          <img
            v-if="$q.platform.is.mobile"
            src="../statics/icons/cute.svg"
            class="animate__animated animate__swing animate__slower"
            alt=""
            width="20%"
            height="20%"
            srcset=""
          />
          <img
            v-if="$q.platform.is.desktop"
            src="../statics/icons/cute.svg"
            class="animate__animated animate__swing animate__slower hvr-buzz-out"
            alt=""
            width="7%"
            height="7%"
            srcset=""
          />
        </q-intersection>

        <br />
        <q-intersection transition="" once>
          <div
            :class="$q.platform.is.mobile ? 'text-h5' : 'text-h4'"
            class="text-negative pacifico animate__animated animate__fadeIn animate__slower q-px-md"
          >
            Imam Satya Wedhatama
          </div>
        </q-intersection>
        <br />
        <div class="text-body1 text-negative futura q-px-md">
          <p>Putra dari Bapak Ngadino & Ibu Tri Wulandari</p>
          <br /><br />

          <p>
            Merupakan suatu kehormatan dan kebahagiaan bagi kami <br />
            apabila Bapak/Ibu/Saudara/teman - teman berkenan hadir,<br />
            untuk memberikan doa restu kepada kami :)
          </p>
        </div>
        <br />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 1440 320"
        style="display: block; margin-bottom: -1px"
      >
        <path
          fill="#CCF2FF "
          fill-opacity="1"
          d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>

    <!-- Yuk Hadir -->

    <div class="bg-secondary text-center">
      <div class="col-12 text-center" data-aos="fade-up">
        <br />
        <q-intersection transition="" once>
          <div
            class="text-h4 text-primary pacifico animate__animated animate__zoomIn animate__slower"
          >
            - Yuk Hadir -
          </div>
        </q-intersection>
        <br /><br />
        <p
          class="text-primary text-h5 text-weight-bold futura animate__animated animate__fadeIn animate__slower"
        >
          Ahad, 20 Desember 2020
        </p>
        <br />
        <div class="row justify-around q-col-gutter-lg">
          <div class="col-12 col-md-6 column items-center futura">
            <q-intersection transition="" once>
              <div class="hvr-float">
                <q-card
                  class="my-cardA text-negative shadow-15 items-center text-body1 animate__animated animate__fadeInLeft animate__slower"
                >
                  <q-card-section>
                    <div class="text-h4 q-mb-xs pacifico text-negative">
                      Akad
                    </div>
                  </q-card-section>
                  <q-img
                    src="../statics/icons/handshake.svg"
                    class=""
                    height="40%"
                    width="40%"
                  />

                  <q-card-section>
                    <q-btn
                      push
                      fab
                      color="red"
                      icon="place"
                      class="absolute"
                      style="top: 0; right: 12px; transform: translateY(-50%)"
                      @click="mapAkad = true"
                    />

                    <q-dialog v-model="mapAkad">
                      <q-card class="my-cardB">
                        <iframe
                          class="iframe"
                          title="myMap"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.8005853713566!2d110.21351231477622!3d-7.487258394599172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8f6aa5ee45b3%3A0xdc07f0e500ac48d6!2sGedung%20Jenderal%20Achmad%20Yani%20Magelang!5e0!3m2!1sen!2sid!4v1593327610736!5m2!1sen!2sid"
                          frameborder="0"
                          style="border: 0"
                          allowfullscreen=""
                        ></iframe>
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
                          <q-item-label
                            >Gedung Jenderal Achmad Yani Magelang</q-item-label
                          >
                          <q-item-label caption
                            >Jl. Jend. Gatot Soebroto, Kec. Magelang Selatan.,
                            Kota Magelang, Jawa Tengah 59214
                          </q-item-label>
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
          <div class="col-12 col-md-6 column items-center futura">
            <q-intersection transition="" once>
              <div class="hvr-float">
                <q-card
                  class="my-cardA text-primary shadow-15 items-center text-body1 animate__animated animate__fadeInRight animate__slower"
                >
                  <q-card-section>
                    <div class="text-h4 q-mb-xs pacifico">Walimah</div>
                  </q-card-section>
                  <q-img
                    src="../statics/icons/ice-cream.svg"
                    height="40%"
                    width="40%"
                  />

                  <q-card-section>
                    <q-btn
                      push
                      fab
                      color="red"
                      icon="place"
                      class="absolute"
                      style="top: 0; right: 12px; transform: translateY(-50%)"
                      @click="mapWalimah = true"
                    />

                    <q-dialog v-model="mapWalimah">
                      <q-card class="my-cardB">
                        <iframe
                          class="iframe"
                          title="myMap"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.8005853713566!2d110.21351231477622!3d-7.487258394599172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8f6aa5ee45b3%3A0xdc07f0e500ac48d6!2sGedung%20Jenderal%20Achmad%20Yani%20Magelang!5e0!3m2!1sen!2sid!4v1593327610736!5m2!1sen!2sid"
                          frameborder="0"
                          style="border: 0"
                          allowfullscreen=""
                        ></iframe>
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
                          <q-item-label
                            >Gedung Jenderal Achmad Yani Magelang</q-item-label
                          >
                          <q-item-label caption
                            >Jl. Jend. Gatot Soebroto, Kec. Magelang Selatan.,
                            Kota Magelang, Jawa Tengah 59214
                          </q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item clickable>
                        <q-item-section avatar>
                          <q-icon color="primary" name="alarm_on" />
                        </q-item-section>

                        <q-item-section>
                          <q-item-label>
                            {{ sesiwalimah }}
                          </q-item-label>
                          <q-item-label caption>{{ tamuwalimah }}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-card-section>
                </q-card>
              </div>
            </q-intersection>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>

    <!-- Pesan -->
    <div class="row bg-warning text-center">
      <div class="col-12">
        <br />
        <q-intersection transition="" once>
          <div
            class="text-h4 text-negative pacifico animate__animated animate__zoomIn animate__slower"
          >
            - Terima Kasih Pesan/Doanya -
          </div>
        </q-intersection>
        <br />

        <s-pesan></s-pesan>
      </div>
      <br />
    </div>

    <!-- Ada Pesan untuk Kami -->
    <div class="bg-secondary">
      <div class="row bg-secondary">
        <div class="col">
          <br />
          <q-intersection transition="" once>
            <p
              class="text-h5 text-primary text-center pacifico animate__animated animate__zoomIn animate__slower"
            >
              - Ada Pesan Untuk Kami ? -
            </p>
          </q-intersection>
          <div class="row bg-grey-2 justify-center">
            <!-- Form -->
            <div class="col-9 bg-image-adapesan futura">
              <br />
              <div class="items-center" align="center">
                <q-input
                  v-model="siapa"
                  filled
                  color="primary"
                  outlined
                  label="Dari siapa nih ? :)"
                  dense
                  :rules="[ (val: string) => val.length <= 50 || 'Maksimal 50 karakter ya, nanti disambung lagi aja :)',
                    (val: string) => val.length >0 || 'jangan lupa diisi yaa']"
                >
                </q-input>

                <br />
                <q-input
                  v-model="pesan"
                  filled
                  color="primary"
                  outlined
                  type="textarea"
                  label="Pesannya apa ? (yang baik - baik aja yaa)"
                  dense
                  :rules="[ (val: string) => val.length <= 350 || 'Maksimal 350 karakter ya, nanti disambung lagi aja :)',
                    (val: string) => val.length >0 || 'jangan lupa diisi yaa']"
                />
                <br />
                <q-btn
                  push
                  color="primary"
                  text-color="white"
                  label="Kirim"
                  class="hvr-float-button"
                  icon="send"
                  @click="kirim()"
                />
              </div>
              <br /><br />
            </div>
            <br />
          </div>
        </div>
        <br />
      </div>
    </div>

    <q-page-sticky position="bottom-left" :offset="[18, 18]">
      <!-- ========== VERSION 2: New Generated Pichu Images (COMMENTED) ========== -->
      <!--
      <img
        v-if="pokemon == true && pokemonHit % 5 !== 0 && pokemonHit < 50"
        src="/pichu_running.png"
        class="pichu-running"
        alt="Pichu Running"
        width="80"
        height="80"
      />

      <img
        v-if="pokemon == true && pokemonHit % 5 == 0 && pokemonHit < 50"
        src="/pichu_sleeping.png"
        class="pichu-sleeping"
        alt="Pichu Sleeping"
        width="100"
        height="80"
      />

      <img
        v-if="pokemon == true && pokemonHit >= 50"
        src="/pichu_running.png"
        class="pichu-running pichu-evolved"
        alt="Pikachu"
        width="100"
        height="100"
      />
      -->

      <!-- ========== VERSION 1: Original GIF Images (ACTIVE) ========== -->
      <img
        v-if="
          pokemon == true && ((pokemonHit + 1) / 2) % 2 === 0 && pokemonHit < 50
        "
        style="-webkit-transform: scaleX(-1); transform: scaleX(-1)"
        src="../statics/Gif/pichu2.gif"
        class="animate__animated animate__fadeInLeft"
        alt=""
        width="50%"
        height="50%"
        srcset=""
      />

      <img
        v-if="
          pokemon == true && ((pokemonHit + 1) / 2) % 2 !== 0 && pokemonHit < 50
        "
        style="-webkit-transform: scaleX(-1); transform: scaleX(-1)"
        src="../statics/Gif/pichu3.gif"
        class="animate__animated animate__fadeInLeft"
        alt=""
        width="35%"
        height="35%"
        srcset=""
      />

      <img
        v-if="pokemon == true && pokemonHit >= 50"
        style="-webkit-transform: scaleX(-1); transform: scaleX(-1)"
        src="../statics/Gif/pikachu.gif"
        class="animate__animated animate__fadeInLeft"
        alt=""
        width="50%"
        height="50%"
        srcset=""
      />
    </q-page-sticky>

    <!-- floating button -->

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab icon="favorite" glossy direction="up" color="pink">
        <q-fab-action
          @click="toggleMusic()"
          color="primary"
          :icon="iconStatus"
        />
        <q-fab-action
          @click="toggleSakura()"
          color="pink"
          icon="local_florist"
        />
        <!-- Game button hidden for now
        <q-fab-action
          @click="showGame = true"
          color="orange"
          icon="sports_esports"
        />
        -->
      </q-fab>
    </q-page-sticky>

    <q-dialog
      v-model="alert"
      class="futura text-primary bg-secondary"
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
          <div class="text-h6">Halo {{ siapa }} :)</div>
          <br />
          Makasih banget telah memberi pesan kepada kami
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
            @click="clearPesan()"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog
      v-model="errorDialog"
      class="futura text-negative bg-warning"
      persistent
      transition-show="flip-down"
      transition-hide="flip-up"
    >
      <q-card class="bg-negative text-white">
        <q-bar>
          <q-space />

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6">Ada Error</div>
          <br />
          Pastikan formnya terisi semua dan tidak ada pesan error yaa :)
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
            @click="clearPesan()"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- Game dialog hidden for now
    <q-dialog v-model="showGame" maximized>
      <PichuGame :pesans="pesans" @close="showGame = false" />
    </q-dialog>
    -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useQuasar } from "quasar";
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "src/boot/firebase";
import { useThingsStore } from "src/stores/things";
import SPesan from "src/components/S-Pesan.vue";
import PichuGame from "src/components/PichuGame.vue";

const $q = useQuasar();
const thingsStore = useThingsStore();

// Reactive data
const showGame = ref(false);
const tamuwalimah = ref("Tamu Bapak Ngadino dan Bu Wulan");
const sesiwalimah = ref("Sesi 1 | 11:00 - 12:00");
const mapWalimah = ref(false);
const mapAkad = ref(false);
const pokemonHit = ref(0);
const pokemon = ref(false);
const audio = ref<HTMLAudioElement | null>(null);
const iconStatus = ref("play_arrow");
const musicStatus = ref(false);
const slide = ref("style");
const siapa = ref("");
const pesan = ref("");
const alert = ref(false);
const errorDialog = ref(false);

interface Pesan {
  id: string;
  siapa: string;
  pesan: string;
  status: boolean;
  time: string;
}

const pesans = ref<Pesan[]>([]);

// Computed for animated name (using Pinia)
const animateX = computed({
  get: () => thingsStore.animatedName,
  set: (val: string | null) => thingsStore.setAnimatedName(val),
});

// Methods
function toggleMusic() {
  pokemonHit.value += 1;

  if (iconStatus.value === "play_arrow") {
    iconStatus.value = "pause";
  } else {
    iconStatus.value = "play_arrow";
  }

  if (musicStatus.value === false) {
    musicStatus.value = true;

    // Use local music files
    let path: string;

    if (((pokemonHit.value + 1) / 2) % 2 !== 0) {
      path = "/1or.mp3"; // Littleroot Town
      animateX.value =
        "animate__animated animate__fadeIn animate__infinite animate__slower animate__delay-2s";
    } else {
      path = "/3or.mp3"; // Petalburg City
      animateX.value =
        "animate__animated animate__swing animate__infinite animate__fast animate__delay-2s";
    }

    audio.value = new Audio(path);
    audio.value.play();
    pokemon.value = true;
  } else {
    audio.value?.pause();
    animateX.value = null;
    pokemon.value = false;
    musicStatus.value = false;
  }
}

function toggleSakura() {
  thingsStore.setIsSakura(!thingsStore.isSakura);
}

function clearPesan() {
  siapa.value = "";
  pesan.value = "";
  alert.value = false;
  errorDialog.value = false;
}

async function kirim() {
  $q.loadingBar.start();

  if (
    !pesan.value ||
    !siapa.value ||
    pesan.value === "" ||
    siapa.value === ""
  ) {
    alert.value = false;
    errorDialog.value = true;
    $q.loadingBar.stop();
    return;
  }

  if (pesan.value.length > 350 || siapa.value.length > 50) {
    errorDialog.value = true;
    $q.loadingBar.stop();
    return;
  }

  try {
    await addDoc(collection(db, "pesans"), {
      siapa: siapa.value,
      pesan: pesan.value,
      status: false,
      time: new Date().toISOString(),
    });
    alert.value = true;
  } catch (error) {
    console.error("Error adding document: ", error);
    errorDialog.value = true;
  }

  $q.loadingBar.stop();
}

// Lifecycle
onMounted(() => {
  // Preload Assets (Music & Images)
  const assets = [
    "/1or.m4a",
    "/3or.m4a",
    new URL("../statics/Gif/pichu2.gif", import.meta.url).href,
    new URL("../statics/Gif/pichu3.gif", import.meta.url).href,
    new URL("../statics/Gif/pikachu.gif", import.meta.url).href,
    new URL("../statics/a1.png", import.meta.url).href,
    new URL("../statics/muslimah1.png", import.meta.url).href,
  ];

  assets.forEach((src) => {
    if (src.endsWith(".m4a") || src.endsWith(".mp3")) {
      const a = new Audio(src);
      a.load();
    } else {
      const i = new Image();
      i.src = src;
    }
  });

  // Auto-play music on mount (toggle twice to start)
  toggleMusic();
  toggleMusic();

  // Rotate walimah session info
  setInterval(() => {
    const a = sesiwalimah.value;
    if (a === "Sesi 1 | 11:00 - 12:00") {
      sesiwalimah.value = "Sesi 2 | 12:30 - 13:30";
      tamuwalimah.value = "Tamu Bu Dewi";
    }
    if (a === "Sesi 2 | 12:30 - 13:30") {
      sesiwalimah.value = "Sesi 3 | 13:45 - 14:45";
      tamuwalimah.value = "Tamu Bu Dewi, Hasna dan Imam";
    }
    if (a === "Sesi 3 | 13:45 - 14:45") {
      sesiwalimah.value = "Sesi 1 | 11:00 - 12:00";
      tamuwalimah.value = "Tamu Bapak Ngadino dan Bu Wulan";
    }
  }, 5000);

  // Listen for pesans from Firestore
  const q = query(collection(db, "pesans"), where("status", "==", true));
  onSnapshot(q, (snapshot) => {
    pesans.value = snapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as Pesan)
    );
  });
});
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
  background: rgba(255, 255, 255, 0.75) !important
  backdrop-filter: blur(8px)
  -webkit-backdrop-filter: blur(8px)
  border: 1px solid rgba(255, 255, 255, 0.4)
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1) !important

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
  background-image: url("../statics/icons/paper-plane.svg")
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
.hvr-float-button:hover,
.hvr-float:focus,
.hvr-float:active {
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
.hvr-float:hover,
.hvr-float:focus,
.hvr-float:active {
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
.hvr-buzz-out:hover,
.hvr-buzz-out:focus,
.hvr-buzz-out:active {
  -webkit-animation-name: hvr-buzz-out;
  animation-name: hvr-buzz-out;
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

/* ========== Pichu Animations ========== */
/* Running animation - bouncy hop */
.pichu-running {
  animation: pichu-hop 0.4s ease-in-out infinite;
  transform-origin: bottom center;
}

@keyframes pichu-hop {
  0%,
  100% {
    transform: translateY(0) scaleY(1);
  }
  50% {
    transform: translateY(-10px) scaleY(1.05);
  }
}

/* Sleeping animation - gentle float */
.pichu-sleeping {
  animation: pichu-sleep 2s ease-in-out infinite;
}

@keyframes pichu-sleep {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-5px) rotate(2deg);
  }
}

/* Evolved Pichu - bigger bounce */
.pichu-evolved {
  animation: pichu-evolved-hop 0.35s ease-in-out infinite;
  filter: hue-rotate(20deg) brightness(1.1);
}

@keyframes pichu-evolved-hop {
  0%,
  100% {
    transform: translateY(0) scaleY(1);
  }
  50% {
    transform: translateY(-15px) scaleY(1.08);
  }
}
</style>
