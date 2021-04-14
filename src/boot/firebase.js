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
    apiKey: 'AIzaSyAwwV17qnFlRftlFxItx5BLKgJXn6un4uA',
    authDomain: 'imam-hasna.firebaseapp.com',
    databaseURL: 'https://imam-hasna.firebaseio.com',
    projectId: 'imam-hasna',
    storageBucket: 'imam-hasna.appspot.com',
    messagingSenderId: '152751636011',
    appId: '1:152751636011:web:765336b75f814e6a7c346e',
    measurementId: 'G-PB6JNFBPH4'
  }

  firebase.initializeApp(firebaseConfig)
  // firebase.analytics()
  // var db = firebase.firestore()
  Vue.prototype.$firebase = firebase
}
