import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLrya9NBy6GoQHD1b7ODBl62BvTpqmlh8",
  authDomain: "safari-food-and-travel.firebaseapp.com",
  projectId: "safari-food-and-travel",
  storageBucket: "safari-food-and-travel.appspot.com",
  messagingSenderId: "319854272795",
  appId: "1:319854272795:web:abec3b33e878e2434bb3be",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
