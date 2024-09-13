// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8M1eiYc3rhWd9a6quNuXIAO4zfDIb_5s",
  authDomain: "dash-5054b.firebaseapp.com",
  projectId: "dash-5054b",
  storageBucket: "dash-5054b.appspot.com",
  messagingSenderId: "792437425008",
  appId: "1:792437425008:web:4d273f7a259110f9d045b5",
  measurementId: "G-MWYQBCT1PZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db  = getFirestore(App);