import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDHOXvro_NJEbKUp5yv_vtZ5qVLCsnMOqI",
  authDomain: "ropero-c9d1f.firebaseapp.com",
  projectId: "ropero-c9d1f",
  storageBucket: "ropero-c9d1f.appspot.com",
  messagingSenderId: "870208128939",
  appId: "1:870208128939:web:c81c328806587b3ee574ee",
  measurementId: "G-R5K3XG420M",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);

const app = initializeApp(firebaseConfig);
