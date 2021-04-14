<template>
  <div>
    <div class="q-pa-md">

      <transition appear enter-active-class="animated fadeInRight" leave-active-class="animated fadeOut">
        <q-table  title="Daftar Pesan" :data="pesans" :columns="columns" row-key="name" :filter="filter"
          :loading="loading" :pagination.sync="pagination" :visible-columns="visibleColumns" no-data-label="I didn't find anything for you"
          class="bg-white text-primary" no-results-label="The filter didn't uncover any results">

          <template v-slot:body="props">
            <q-tr :props="props">

              <q-td key="action">
                <div class=" q-gutter-sm">
                  <q-btn push round color="blue-5" icon="create" size='sm'
                    @click="edit(props, props.rowIndex)">
                    <q-tooltip content-class="bg-blue-5" :offset="[10, 10]">
                      Edit!
                    </q-tooltip>
                  </q-btn>

                  <q-btn push round color="red-5" icon="delete" size='sm'
                    @click="deleteDialog(props)">
                    <q-tooltip content-class="bg-red-5" :offset="[10, 10]">
                      Delete
                    </q-tooltip>
                  </q-btn>

                </div>
              </q-td>

              <q-td key="index" :props="props">
                <q-badge color="primary">
                  {{ props.rowIndex+1 }}
                </q-badge>
              </q-td>

              <q-td key="siapa" :props="props">
                <q-badge color="primary">
                  {{ props.row.siapa }}
                </q-badge>
              </q-td>

              <q-td key="pesan" :props="props"  >
                 <div class="my-table-details">
                   <!-- <div> -->
                              {{props.row.pesan.substring(0,350)}}
                  </div>

              </q-td>

              <q-td key="status" :props="props">
                <q-badge color="primary">
                  <div v-if="props.row.status==false">ngga</div>
                  <div v-else>iya</div>

                </q-badge>
                <q-toggle
                  v-model="props.row.status"
                  color="blue"
                  @input="status(props, props.row.status)"
                  checked-icon="check"
                  unchecked-icon="clear"
                />
              </q-td>

            </q-tr>
          </template>

          <template v-slot:top-right>
            <q-select v-model="visibleColumns" multiple borderless dense options-dense
              :display-value="$q.lang.table.columns" emit-value map-options :options="columns" option-value="name"
              style="min-width: 150px" />

            <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
              <q-space />

              <template v-slot:append>
                <q-icon name="search" />
              </template>

              <template v-slot:no-data="{ icon, message, filter }">
                <div class="full-width row flex-center text-accent q-gutter-sm">
                  <q-icon size="2em" name="sentiment_dissatisfied" />
                  <span>
                    Well this is sad... {{ message }}
                  </span>
                  <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
                </div>
              </template>

            </q-input>

          </template>

        </q-table>

      </transition>
      <!-- Edit -->
      <q-dialog v-model="medium">
        <q-card class="text-black bg-white ">
          <q-bar>

            <div>Edit Data</div>

            <q-space />

            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-card-section>

            <q-form @submit="updateData(id)" @reset="onReset" class="q-gutter-md">

                <q-input  filled bg-color="accent" color="primary" v-model="editedData.penulis" label="Penulis"
                hint="Penulis" lazy-rules :rules="[ val => val && val.length > 0 || 'Jangan lupa diisi yaa :)']" />

                 <q-input  v-model="editedData.text" filled bg-color="accent" color="primary" outlined type="textarea"
                    label="Pesannya apa ? (yang baik - bak aja yaa)" dense       :rules="[ val => val.length <= 350 || 'Maksimal 350 karakter ya, nanti disambung lagi aja :)',
                    val => val.length >0 || 'jangan lupa diisi yaa']" />

              <q-card-actions align="right">

                <q-btn label="Reset" type="reset" color="accent" text-color="primary" />
                <q-btn label="Update" type="submit" color="accent" text-color="primary" class="q-ml-sm"
                  v-close-popup />
              </q-card-actions>
            </q-form>

          </q-card-section>

        </q-card>
      </q-dialog>

      <!-- Delete -->
      <q-dialog v-model="confirmDelete" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <q-avatar icon="delete" color="primary" text-color="white" />
            <span class="q-ml-sm">Kamu akan menghapusnya untuk selama - lamanya ?</span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Ga jadi deh" color="primary" v-close-popup />
            <q-btn flat label="Iya beneran" color="primary" v-close-popup @click="deleteku(id, index)" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {

      pagination: {
        sortBy: null,
        descending: false,
        page: 1,
        rowsPerPage: 5
},
      index: null,
      confirmDelete: null,
      id: null,
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        // Action
        {
          name: 'action',
          align: 'left',
          label: 'Aksi',
          sortable: true
        },
        // Index
        {
          name: 'index',
          align: 'left',
          label: 'No',
          field: row => row.__index,
          format: val => `${val}`,
          sortable: true
        },
        // Seksi
        {
          name: 'siapa',
          // required: true,
          label: 'Siapa',
          align: 'left',
          field: row => row.siapa,
          format: val => `${val}`,
          sortable: true
        },
        // Output
        {
          name: 'pesan',
          align: 'left',
          label: 'Pesan',
          field: row => row.pesan,
          format: val => `${val}`,
          sortable: true,
          // style: 'width: 200px',
          // classes: 'my-special-class',
          headerStyle: 'width: 200px'
          // headerClasses: 'my-special-class'
        },
        // Komponen
        {
          name: 'status',
          align: 'left',
          label: 'Publish ?',
          field: row => row.status,
          format: val => `${val}`,
          sortable: true
        }

      ],

      visibleColumns: [
        'action',
        'index',
        'siapa',
        'pesan',
        'status'

      ],
      getData: null,
      medium: false,
      editedData: {
        penulis: null,
        text: null
      }

    }
  },
  firestore () {
    // var user = this.$firebase.auth().currentUser
    return {

      pesans: this.$firebase.firestore().collection('pesans')

    //   user_arsip: this.$firebase.firestore().collection('data_arsip').where('user_id', '==', user.uid)
    }
  },
  methods: {
    async status (id, status) {
      console.log('tes')
      console.log('id', id)
      console.log('status', status)
      await this.$firebase.firestore().collection('pesans').doc(id.row['.key']).update({

        status: status

      })
    },
    // uploadImage (e) {
    //   const file = e.target.files[0]
    //   const storageRef = this.$firebase.storage().ref('artikels/' + file.name)
    //   const uploadTask = storageRef.put(file)
    //   uploadTask.on('state_changed', (snapshot) => {
    //     // Observe state change events such as progress, pause, and resume
    //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded

    //     uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
    //       // this.image.push(downloadURL)
    //       this.editedData.gambar = downloadURL
    //       // console.log('File available at', downloadURL)
    //       // console.log(this.editedData.gambar)
    //     })
    //   })
    // },
    deleteDialog (id) {
      this.confirmDelete = true
      this.id = id

      // console.log(this.id.row['.key'], index)
    },
    edit (id, index) {
      console.log(id, index)
      this.medium = true
      this.index = id.rowIndex
      this.id = id
      // console.log(this.id.row['.key'], index)

      this.editedData.penulis = this.pesans[index].siapa
      this.editedData.text = this.pesans[index].pesan
    },
    updateData (id) {
      this.$firebase.firestore().collection('pesans').doc(id.row['.key']).update({

        siapa: this.editedData.penulis,
        pesan: this.editedData.text

      })
        .then(
          this.$q.notify({
            color: 'accent',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Yeay Arsip Berhasil Diupdate :)',
            position: 'center',
            timeout: 5000
          })
        )
      // this.fetchData2()
      // this.getData = null
      // console.log(this.getData)
    },
    deleteku (id) {
      this.$firebase.firestore().collection('pesans').doc(this.id.row['.key']).delete()
        .then(
          this.$q.notify({
            color: 'negative',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Yeay Pesan Berhasil Dihapus  :)',
            position: 'center',
            timeout: 5000
          })
        )
      this.fetchData2()
    },
    // onSubmit () {
    //   const user = this.$firebase.auth().currentUser
    //   this.$firebase.firestore().collection('data_arsip').doc().set({
    //     user_id: user.uid,
    //     seksi_bagian: this.seksi_bagian_x,
    //     output: this.output_x,
    //     komponen: this.komponen_x,
    //     nama_arsip: this.nama_arsip_x,
    //     no_rak: this.no_rak_x,
    //     lokasi_rak: this.lokasi_rak_x,
    //     nomor_arsip: this.nomor_arsip_x,
    //     keterangan: this.keterangan_x,
    //     time: new Date().toISOString()

    //   })
    //   // .then(function (docRef) {
    //   //   console.log('Document written with ID: ', docRef.id)
    //   // })
    //   // .catch(function (error) {
    //   //   console.error('Error adding document: ', error)
    //   // })
    //     .then(
    //       this.$q.notify({
    //         color: 'accent',
    //         textColor: 'white',
    //         icon: 'cloud_done',
    //         message: 'Yeay Berhasil :)',
    //         position: 'center',
    //         timeout: 3000
    //       })
    //     )
    //   this.submit3()
    // },
    onReset () {
      this.editedData.penulis = ''
      this.editedData.text = ''
    },
    fetchData () {
      this.$q.loadingBar.start()
      // const user = this.$firebase.auth().currentUser
      // let id = uid
      const tes = []

      this.$firebase.firestore().collection('pesans').onSnapshot(ref => {
        ref.forEach(doc => {
          const data = {
            // user_id: doc.data().user_id,
            siapa: doc.data().siapa,
            pesan: doc.data().pesan,
            status: doc.data().status

          }
          tes.push(data)
        })
      })
      this.getData = tes

      this.$q.loadingBar.stop()
    },
    fetchData2 () {
      this.$q.loadingBar.start()
      // const user = this.$firebase.auth().currentUser
      // let id = uid
      const tes = []
      this.$firebase.firestore().collection('pesans').get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, ' => ', doc.data())
            const data = {
              // user_id: doc.data().user_id,
            siapa: doc.data().siapa,
            pesan: doc.data().pesan,
            status: doc.data().status
            }
            tes.push(data)
          })
        })
      this.getData = tes
    }
  }
}

</script>
<style>
  .my-table-details {
    font-size: 0.85em;
    font-style: italic;
    width: 800px;
    max-width: 800px;
    white-space: normal;
    color: #555;
    margin-top: 4px;
  }
  .grid-style-transition{
  transition: transform .28s, background-color .28s
  }
</style>
