import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBbiZ2uiBRWxkEptRtNEwXDhDfg92DqhJ8",
  authDomain: "firepr2-361eb.firebaseapp.com",
  projectId: "firepr2-361eb",
  storageBucket: "firepr2-361eb.appspot.com",
  messagingSenderId: "535654926841",
  appId: "1:535654926841:web:29721f141cd18d23b65528"
};


const app = initializeApp(firebaseConfig);
export const idPassDB = getAuth(app)
export const txtDB = getFirestore(app)