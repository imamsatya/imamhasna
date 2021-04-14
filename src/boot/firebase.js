// import something here
import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import VueFirestore from 'vue-firestore'

Vue.use(VueFirestore)
// "async" is optional
export default ({
  Vue
}) => {
  // something to do
  const firebaseConfig = {
    apiKey: 'XXXXX',
    authDomain: 'XXXXX',
    databaseURL: 'XXXXX',
    projectId: 'XXXXX',
    storageBucket: 'XXXXX',
    messagingSenderId: 'XXXXX',
    appId: 'XXXXX',
    measurementId: 'XXXXX'
  }

  firebase.initializeApp(firebaseConfig)
  // firebase.analytics()
  // var db = firebase.firestore()
  Vue.prototype.$firebase = firebase
}
