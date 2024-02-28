// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8XMMPxDAkUGV711Ab0uFehvY4m0z8sTA",
  authDomain: "fir-ba645.firebaseapp.com",
  projectId: "fir-ba645",
  storageBucket: "fir-ba645.appspot.com",
  messagingSenderId: "1073527016395",
  appId: "1:1073527016395:web:edaa30fd9f7f434056c44e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }