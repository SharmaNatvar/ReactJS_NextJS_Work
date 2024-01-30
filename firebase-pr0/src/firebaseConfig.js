import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyBQweyl8yDpQgaN68aK8kLXFnaoxJ7jbRI",
  authDomain: "emailpass-e3c7d.firebaseapp.com",
  projectId: "emailpass-e3c7d",
  storageBucket: "emailpass-e3c7d.appspot.com",
  messagingSenderId: "71520153494",
  appId: "1:71520153494:web:b064b7d4def0e9e18977b7"
};



const app = initializeApp(firebaseConfig);
export const dataBase = getAuth(app) 
export const imgDB = getStorage(app)
export const todoDataBase = getFirestore(app)