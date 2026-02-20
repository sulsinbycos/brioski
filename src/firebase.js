// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Replace these placeholders with your actual Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyDnUYXRujgSGDCsmKxjSx5AWWiQDoNyOPE",
  authDomain: "brioski-2aad2.firebaseapp.com",
  projectId: "brioski-2aad2",
  storageBucket: "brioski-2aad2.firebasestorage.app",
  messagingSenderId: "750586374149",
  appId: "1:750586374149:web:492c7b290cb898d143d46c",
  measurementId: "G-QHRBT79B46"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const provider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);