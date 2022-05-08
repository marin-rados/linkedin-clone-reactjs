import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBBs3Gh0Zpyn0Uof3-B5s9VO1ubQaHwSAc",
    authDomain: "linkedin-clone-marin.firebaseapp.com",
    projectId: "linkedin-clone-marin",
    storageBucket: "linkedin-clone-marin.appspot.com",
    messagingSenderId: "1079320943201",
    appId: "1:1079320943201:web:1401a4642472bbad52e820",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };