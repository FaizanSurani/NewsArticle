// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQR3wcMH57Kdq50zJArDaN1FWx9OfexjA",
  authDomain: "news-article-c0a68.firebaseapp.com",
  projectId: "news-article-c0a68",
  storageBucket: "news-article-c0a68.appspot.com",
  messagingSenderId: "220176179092",
  appId: "1:220176179092:web:c79ed703427d6f864b7981",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
