// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6VmJKXdBQxTWjPVjLf69xPdvcPaJo2E0",
  authDomain: "fir-moda-milon-ph-3.firebaseapp.com",
  projectId: "fir-moda-milon-ph-3",
  storageBucket: "fir-moda-milon-ph-3.firebasestorage.app",
  messagingSenderId: "11769923103",
  appId: "1:11769923103:web:310122f6295dbba228772a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);