// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLHITpeUbkPkEOfpvXdKr1kGeCO33-kaI",
  authDomain: "desi-blogging-website.firebaseapp.com",
  projectId: "desi-blogging-website",
  storageBucket: "desi-blogging-website.appspot.com",
  messagingSenderId: "927647131525",
  appId: "1:927647131525:web:e5feafc02dbbce7a9086ec",
  measurementId: "G-YS4ZCDKKN1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
