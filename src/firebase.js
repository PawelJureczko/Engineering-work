import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCP13NE1kvBilVg9aep5bSK7D6bihccxXk",
  authDomain: "inzynierka-bfb71.firebaseapp.com",
  projectId: "inzynierka-bfb71",
  storageBucket: "inzynierka-bfb71.appspot.com",
  messagingSenderId: "782422641377",
  appId: "1:782422641377:web:10074ff0840006673b45a0",
  measurementId: "G-LVNV5245R3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
