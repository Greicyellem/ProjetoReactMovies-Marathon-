// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_APIKEY,
  authDomain: process.env.VITE_AUTHDOMAIN,
  projectId: process.env.VITE_PROJECTID,
  storageBucket: process.env.VITE_STORAGEBUCKET,
  messagingSenderId: process.env.VITE_MESSAGINGSENDERID,
  appId: process.env.VITE_APPID,
  measurementId: process.env.VITE_MEASUREMENTID
};

const autenticacao = initializeApp(firebaseConfig);

export const auth = getAuth(autenticacao) 

const autentication = initializeApp(firebaseConfig);

export const authGit = getAuth(autentication) 

