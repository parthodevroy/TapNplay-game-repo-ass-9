// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm1DOwV6cRfOWgdUqSgLcAer2dVvKP9DU",
  authDomain: "simple-firebase-auth-5c21e.firebaseapp.com",
  projectId: "simple-firebase-auth-5c21e",
  storageBucket: "simple-firebase-auth-5c21e.firebasestorage.app",
  messagingSenderId: "762664213623",
  appId: "1:762664213623:web:f4573d03c3865d299eba72",
  measurementId: "G-M38Q2JQ7CK"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);