// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyAAc73at4TlG5Fp-s08NSJZNOlcFTCW6e8",
  authDomain: "authentication-26e37.firebaseapp.com",
  projectId: "authentication-26e37",
  storageBucket: "authentication-26e37.firebasestorage.app",
  messagingSenderId: "972986883254",
  appId: "1:972986883254:web:22eea3a51ea9b091499a17",
  measurementId: "G-6H4JJ83QPJ"
};

// ✅ Initialize app + auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ THIS IS CRITICAL
export { auth };
