// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyAyYYO6LxCqsc6NcXiHaGV7pP5APJH4Moo",
  authDomain: "firepr3.firebaseapp.com",
  projectId: "firepr3",
  storageBucket: "firepr3.appspot.com",
  messagingSenderId: "601393706551",
  appId: "1:601393706551:web:eeb967a757403d01f171b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const idPassDB = getAuth(app);
export const txtDB =  getFirestore(app);
export const imgDB =  getStorage(app);