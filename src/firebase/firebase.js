import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBOfC6EnOZJKNk12Ww0PiO9jDWywqmdC8",
  authDomain: "scholaro-98956.firebaseapp.com",
  projectId: "scholaro-98956",
  storageBucket: "scholaro-98956.firebasestorage.app",
  messagingSenderId: "914548270307",
  appId: "1:914548270307:web:d8528636a9f6d7770c51d6",
  measurementId: "G-52P14B7RPK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
