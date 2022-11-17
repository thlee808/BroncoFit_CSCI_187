import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_xpVg0Dv25waK125wjp50ANTyggNO4n0",
  authDomain: "broncofit-366907.firebaseapp.com",
  projectId: "broncofit-366907",
  storageBucket: "broncofit-366907.appspot.com",
  messagingSenderId: "1076521433967",
  appId: "1:1076521433967:web:6efd9c718dbe37bcd8c69a",
  measurementId: "G-1PV3KR9LRC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);