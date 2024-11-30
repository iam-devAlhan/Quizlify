// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1RgJmGq3mPpXkpwsKv55QVK8dbyQdJ3s",
  authDomain: "new-project-9acfd.firebaseapp.com",
  projectId: "new-project-9acfd",
  storageBucket: "new-project-9acfd.appspot.com",
  messagingSenderId: "376008871804",
  appId: "1:376008871804:web:8f45b983a5b534cb6edef9",
  measurementId: "G-204DE9S6DZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);