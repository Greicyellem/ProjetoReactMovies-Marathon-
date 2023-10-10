// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBx1MK-AP97tZ6x5ClhEPGVQXvLfNpsopU",
  authDomain: "movies-projeto-react.firebaseapp.com",
  projectId: "movies-projeto-react",
  storageBucket: "movies-projeto-react.appspot.com",
  messagingSenderId: "408791886623",
  appId: "1:408791886623:web:5f25fe839d394d2d941e2a",
  measurementId: "G-3W4W4P0E39"
};

const autenticacao = initializeApp(firebaseConfig);

export const auth = getAuth(autenticacao) 
