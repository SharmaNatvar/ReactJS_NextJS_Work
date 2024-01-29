import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBu5_X-GLPLr2aZ-javmU_Nng0isRbiU-I",
  authDomain: "emaillogin-dd6ae.firebaseapp.com",
  projectId: "emaillogin-dd6ae",
  storageBucket: "emaillogin-dd6ae.appspot.com",
  messagingSenderId: "58343570889",
  appId: "1:58343570889:web:9d18358cc24570d077fc18"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getAuth(app)