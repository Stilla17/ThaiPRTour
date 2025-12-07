// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAO9RuFoXTyWBD2KVmo1J2rTrK9uS6zhAE",
    authDomain: "auth-2712b.firebaseapp.com",
    projectId: "auth-2712b",
    storageBucket: "auth-2712b.firebasestorage.app",
    messagingSenderId: "1097407584696",
    appId: "1:1097407584696:web:83d8875982d169e733574d",
    measurementId: "G-0EQSFX5D5E"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
