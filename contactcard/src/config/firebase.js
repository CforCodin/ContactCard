// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp_BKikapDJKI1TgI8QsEz6BPBJQenCGA",
  authDomain: "kavach-85b59.firebaseapp.com",
  projectId: "kavach-85b59",
  storageBucket: "kavach-85b59.appspot.com",
  messagingSenderId: "253920970030",
  appId: "1:253920970030:web:e0f0c677a4e54a000466bf",
  measurementId: "G-LQJB0R134X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);