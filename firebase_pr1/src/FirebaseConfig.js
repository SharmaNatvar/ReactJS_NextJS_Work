import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDMJokRDkRvMrKyNVgq7Iiy8i3wxHVxKWs",
  authDomain: "firepr1.firebaseapp.com",
  projectId: "firepr1",
  storageBucket: "firepr1.appspot.com",
  messagingSenderId: "905808423779",
  appId: "1:905808423779:web:929972e1001ebda9880156"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const singAuth = getAuth(app)
export const dataCollection = getFirestore(app) 