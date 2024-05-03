// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_iq-U7ShByflU09ZZU3ng692egmS6Nfw",
  authDomain: "otp-project-52e9c.firebaseapp.com",
  projectId: "otp-project-52e9c",
  storageBucket: "otp-project-52e9c.appspot.com",
  messagingSenderId: "991148280802",
  appId: "1:991148280802:web:6afd87b7d85fc89f3887bb",
  measurementId: "G-CH2XDSR2H9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);