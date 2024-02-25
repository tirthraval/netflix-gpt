// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvVMZO5CPUS-7DFTpAA_wgLpn6q4PusIQ",
  authDomain: "netflixgpt-cc54f.firebaseapp.com",
  projectId: "netflixgpt-cc54f",
  storageBucket: "netflixgpt-cc54f.appspot.com",
  messagingSenderId: "513466557009",
  appId: "1:513466557009:web:24c314877a5af5c5a90e70",
  measurementId: "G-GLKTLMMRGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()