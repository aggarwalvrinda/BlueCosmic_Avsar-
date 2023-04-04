// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBt5NdAaotD9US3NPUr6Xyn-DyAbX8-iqY",
  authDomain: "avsar-bluecosmic.firebaseapp.com",
  projectId: "avsar-bluecosmic",
  storageBucket: "avsar-bluecosmic.appspot.com",
  messagingSenderId: "902911068399",
  appId: "1:902911068399:web:8a11d2c92595ecae14b31a",
  measurementId: "G-F88ZLYNS24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};