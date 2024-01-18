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
  apiKey: 'AIzaSyCkf7TPIMwbiqrnMP10V4kjCyxt7Evtx7k',
  authDomain: 'e-commerce-rnapp.firebaseapp.com',
  projectId: 'e-commerce-rnapp',
  storageBucket: 'e-commerce-rnapp.appspot.com',
  messagingSenderId: '812305012996',
  appId: '1:812305012996:web:196121e12a25ea77bdd851',
  measurementId: 'G-29S5P1NP6R',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
const analytics = getAnalytics(FIREBASE_APP);
