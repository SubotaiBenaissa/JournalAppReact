// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmf2R5YRtnd2jkvHvM30YDCTZ8JY4gLME",
  authDomain: "react-curso-journal-29d03.firebaseapp.com",
  projectId: "react-curso-journal-29d03",
  storageBucket: "react-curso-journal-29d03.appspot.com",
  messagingSenderId: "257623639089",
  appId: "1:257623639089:web:1a8974d468e9aa77000110",
  measurementId: "G-8NCQMZ5V4E"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firbeaseDB = getFirestore(firebaseApp);