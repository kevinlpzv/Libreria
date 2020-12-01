import  firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyA6vTroYN_wK5Cu5p8uvb-64LGH4T4XhyQ",
    authDomain: "biblioteca-4f042.firebaseapp.com",
    databaseURL: "https://biblioteca-4f042.firebaseio.com",
    projectId: "biblioteca-4f042",
    storageBucket: "biblioteca-4f042.appspot.com",
    messagingSenderId: "226936820185",
    appId: "1:226936820185:web:94290252e2f9e7c374c9c8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectFirestore = firebase.firestore();

  export{projectFirestore};