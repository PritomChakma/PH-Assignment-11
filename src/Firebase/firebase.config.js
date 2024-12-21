// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDqtRrsiqztlyMhSHDdFgFiNKzrgl2PeB4",
  // authDomain: "ph-assignment-11-f2153.firebaseapp.com",
  // projectId: "ph-assignment-11-f2153",
  // storageBucket: "ph-assignment-11-f2153.firebasestorage.app",
  // messagingSenderId: "230790329579",
  // appId: "1:230790329579:web:a33ca8082d3449939a7aae",

  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
