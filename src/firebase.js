// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {auth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnTMx7KGXzU_owOH3FNtEvd8Zs0VQvhkI",
  authDomain: "instagram-clone-2a080.firebaseapp.com",
  projectId: "instagram-clone-2a080",
  storageBucket: "instagram-clone-2a080.appspot.com",
  messagingSenderId: "595314602858",
  appId: "1:595314602858:web:54f0bc096629620af02b13",
  measurementId: "G-R1B5MJEKFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()