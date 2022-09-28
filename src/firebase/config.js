import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyByJEAkZ_F0k0x7a7bPhMkwzuOKRnHru9g",
  authDomain: "vue-firebase-sites-91802.firebaseapp.com",
  projectId: "vue-firebase-sites-91802",
  storageBucket: "vue-firebase-sites-91802.appspot.com",
  messagingSenderId: "49924588980",
  appId: "1:49924588980:web:92c1efe911adab9ab49ee1"
};

// init firebase
firebase.initializeApp(firebaseConfig)
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
export{projectFirestore,projectAuth, timestamp}