// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9SpZIa3M9f2GBMRN_e4Q3qq8CBSBE8PQ",
  authDomain: "task-management-48d32.firebaseapp.com",
  projectId: "task-management-48d32",
  storageBucket: "task-management-48d32.appspot.com",
  messagingSenderId: "1027658288488",
  appId: "1:1027658288488:web:8eda859543b6ec495a9add"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);