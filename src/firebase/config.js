import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCnq9eSdZt52aoD2-QbfU-IordKjWli2G4",
    authDomain: "mymoney-8757b.firebaseapp.com",
    projectId: "mymoney-8757b",
    storageBucket: "mymoney-8757b.appspot.com",
    messagingSenderId: "635394859632",
    appId: "1:635394859632:web:ea5136f748580717720ab5",
    measurementId: "G-YG6GKN2MLM"
  };

//init
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const timeStamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timeStamp }