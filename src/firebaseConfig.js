import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// src/firebaseConfig.js
const firebaseConfig = {
  /*
  apiKey: process.env.VITE_FIREBASE_API_KEY,//import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,//import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,//import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,//import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,//import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID//import.meta.env.VITE_FIREBASE_APP_ID
  */
  apiKey: "AIzaSyAsAC6KcUG6Py6trQZqyS24zoC2LyHsevg",
  authDomain: "ecommerce-react-18c56.firebaseapp.com",
  projectId: "ecommerce-react-18c56",
  storageBucket: "ecommerce-react-18c56.firebasestorage.app",
  messagingSenderId: "645256142767",
  appId: "1:645256142767:web:4b520c3015ef227e0d995a"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig): getApps()[0];

export const db = getFirestore(app);

//export {db};
//export default firebaseConfig;
