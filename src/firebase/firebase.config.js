// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvH9PF8sRFiKA6gwNiikySt21jFTdbwpQ",
  authDomain: "dernapp-9b3e9.firebaseapp.com",
  projectId: "dernapp-9b3e9",
  storageBucket: "dernapp-9b3e9.appspot.com",
  messagingSenderId: "281275665529",
  appId: "1:281275665529:web:6128bf242a0152fa5598a8",
  measurementId: "G-FQ6KY4872Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  db = getFirestore();