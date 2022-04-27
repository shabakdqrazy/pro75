import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBPqutpy5geHbHTIWmMK0x5E-zBDBPPFWM",
  authDomain: "pro75-952f8.firebaseapp.com",
  projectId: "pro75-952f8",
  storageBucket: "pro75-952f8.appspot.com",
  messagingSenderId: "250859533791",
  appId: "1:250859533791:web:3d2db21dffcafcbf0b006a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
