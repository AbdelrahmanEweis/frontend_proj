// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLbiJWLKoV5bSAw9OuN5eBP06VVbNb3_I",
  authDomain: "rickandmorty-aff82.firebaseapp.com",
  projectId: "rickandmorty-aff82",
  storageBucket: "rickandmorty-aff82.appspot.com",
  messagingSenderId: "777035922221",
  appId: "1:777035922221:web:03673ef4ac71f70b90f1a4",
  measurementId: "G-NJMME6WRNR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export { auth };
