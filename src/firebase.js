// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFgPw-6Vb9yR9APP5wAWiAn5u57moGnRk",
  authDomain: "chat-app-e9773.firebaseapp.com",
  projectId: "chat-app-e9773",
  storageBucket: "chat-app-e9773.appspot.com",
  messagingSenderId: "945562896143",
  appId: "1:945562896143:web:7714bcd26069281dc7207a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
