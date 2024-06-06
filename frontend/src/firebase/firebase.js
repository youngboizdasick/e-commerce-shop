// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClaHbCsoH5pM1SrxKo5UdpHoyGk2nGzIw",
  authDomain: "e-commerce-fashion-f0c0b.firebaseapp.com",
  projectId: "e-commerce-fashion-f0c0b",
  storageBucket: "e-commerce-fashion-f0c0b.appspot.com",
  messagingSenderId: "865643457710",
  appId: "1:865643457710:web:37706a647f94d50693d13f",
  measurementId: "G-F537QYXVDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider, signInWithPopup };