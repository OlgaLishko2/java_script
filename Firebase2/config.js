//Import the functions you nedd from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
// import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";
//import firebase from "firebase/app";
//import "firebase/compact/database";
//import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCc9WKspoYUzTzl2GR5ACkptyokd0lT3X0",
  authDomain: "fir-2-fa9cc.firebaseapp.com",
  databaseURL: "https://fir-2-fa9cc-default-rtdb.firebaseio.com",
  projectId: "fir-2-fa9cc",
  storageBucket: "fir-2-fa9cc.firebasestorage.app",
  messagingSenderId: "22013791798",
  appId: "1:22013791798:web:3817e27356c8e641eb5297",
  measurementId: "G-YLPK3M11TW",
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize database
export const database = getDatabase(app);
// export const auth = getAuth(app);
