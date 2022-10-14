import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBSF64hX8SLmY61qkHG_VAAyrCoVy1Sg4I",
  authDomain: "c-71-50bed.firebaseapp.com",
  projectId: "c-71-50bed",
  storageBucket: "c-71-50bed.appspot.com",
  messagingSenderId: "834000968167",
  appId: "1:834000968167:web:64a8953d319f5db5c00542"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
