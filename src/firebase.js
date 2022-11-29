import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAQ1U7rZcYEMcM6mI9couvOY9evDufm04",
  authDomain: "broncofit-extraspace.firebaseapp.com",
  projectId: "broncofit-extraspace",
  storageBucket: "broncofit-extraspace.appspot.com",
  messagingSenderId: "74307945817",
  appId: "1:74307945817:web:b7ca390dedeb6e2386b848"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default db;