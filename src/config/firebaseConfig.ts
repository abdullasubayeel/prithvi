// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA5ANe-UZpcMa3jrvaTrkS2vxKCJQPISGc',
  authDomain: 'awesomeproject-44ae6.firebaseapp.com',
  projectId: 'awesomeproject-44ae6',
  storageBucket: 'awesomeproject-44ae6.appspot.com',
  messagingSenderId: '542007102561',
  appId: '1:542007102561:web:667cc2cb3cf1a5e55fee20',
  measurementId: 'G-BBWPN964DW',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
const analytics = getAnalytics(FIREBASE_APP);
