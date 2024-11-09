// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXpF9tebbehTOxfDvrK1XXQ-4GzahBlZw",
  authDomain: "simple-firebase-c7a3a.firebaseapp.com",
  projectId: "simple-firebase-c7a3a",
  storageBucket: "simple-firebase-c7a3a.firebasestorage.app",
  messagingSenderId: "350195609801",
  appId: "1:350195609801:web:2935a959bbba9096a3dd18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;