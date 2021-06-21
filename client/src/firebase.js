import firebase from 'firebase/app';
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAlByft8U80e0ufRr2e3ZS1Eg3-A5ISaok",
    authDomain: "car-project-2ba2d.firebaseapp.com",
    projectId: "car-project-2ba2d",
    storageBucket: "car-project-2ba2d.appspot.com",
    messagingSenderId: "287914700954",
    appId: "1:287914700954:web:9563e808cd17be33a16f23"
  };

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  