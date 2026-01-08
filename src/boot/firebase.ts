import { boot } from 'quasar/wrappers'
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Firebase configuration
// Replace these with your actual Firebase config values
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

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

// Initialize services
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

// Export for use in components
export { auth, db, storage, firebaseApp }

export default boot(({ router }) => {
    // Optional: Add auth state listener for route guards
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log('User logged in:', user.email)
        } else {
            console.log('User logged out')
        }
    })
})
