import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUn1As6gh0ZlATuCdmplbdpNrbk9s6oHg",
  authDomain: "broncofit2.firebaseapp.com",
  projectId: "broncofit2",
  storageBucket: "broncofit2.appspot.com",
  messagingSenderId: "822190385545",
  appId: "1:822190385545:web:0d8a884c0361be8e589958",
  measurementId: "G-YE81B4YLB2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default db;