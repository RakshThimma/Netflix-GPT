// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATAbxDMTtfO3w2-e5GJw2mtHlxm7hlhIk",
  authDomain: "netflixgpt-89e80.firebaseapp.com",
  projectId: "netflixgpt-89e80",
  storageBucket: "netflixgpt-89e80.firebasestorage.app",
  messagingSenderId: "234378390256",
  appId: "1:234378390256:web:ce777f250fedf716bf3035",
  measurementId: "G-738YHH80K3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();