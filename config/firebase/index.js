import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config();

export const firebaseConfig = {
  apiKey: "AIzaSyAN9MwPFsRq23OqW0iajUgndbOr6vYP0UI",
  authDomain: "nexprofile-1a0bb.firebaseapp.com",
  projectId: "nexprofile-1a0bb",
  storageBucket: "nexprofile-1a0bb.appspot.com",
  messagingSenderId: "447098334551",
  appId: "1:447098334551:web:0511efa5126dc49030e212",
  measurementId: "G-6J73XSL275",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
