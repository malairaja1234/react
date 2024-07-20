// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxx-i6f9e_d6zPdEUMtu8QNIq7rwZdniE",
  authDomain: "login-732a7.firebaseapp.com",
  projectId: "login-732a7",
  storageBucket: "login-732a7.appspot.com",
  messagingSenderId: "483821368322",
  appId: "1:483821368322:web:4d03008d3f71bb7b4e231b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;
