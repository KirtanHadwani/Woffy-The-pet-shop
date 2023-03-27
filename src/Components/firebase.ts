// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1EdcPItDFBlUaa65ov9OjQstCWP7aD1s",
  authDomain: "petshop-8875f.firebaseapp.com",
  projectId: "petshop-8875f",
  storageBucket: "petshop-8875f.appspot.com",
  messagingSenderId: "632959879457",
  appId: "1:632959879457:web:43fd0a155e1b84419e9660",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
