import firebase from 'firebase'
import 'firebase/firestore'

 var firebaseConfig = {
    apiKey: "AIzaSyAwJntkZaW0FMtw1wEhZBoTlfuh5bm_7A8",
    authDomain: "libreria-8a9fc.firebaseapp.com",
    databaseURL: "https://libreria-8a9fc.firebaseio.com",
    projectId: "libreria-8a9fc",
    storageBucket: "libreria-8a9fc.appspot.com",
    messagingSenderId: "254244409835",
    appId: "1:254244409835:web:9f895d23589857e104c9ae"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 export const db = firebase.firestore();