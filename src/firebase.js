// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-gbVgJ8P9BkbvyX83F-Kh3PQTDmK7Ho8",
  authDomain: "realtor-clone-react-905b2.firebaseapp.com",
  projectId: "realtor-clone-react-905b2",
  storageBucket: "realtor-clone-react-905b2.appspot.com",
  messagingSenderId: "1095895512582",
  appId: "1:1095895512582:web:38b5bedece2385fc47b587",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
