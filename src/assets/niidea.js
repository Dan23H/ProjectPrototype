// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChRLjCJMiUucO6kOW03VgcxfpLT17Y054",
  authDomain: "projectis2.firebaseapp.com",
  projectId: "projectis2",
  storageBucket: "projectis2.appspot.com",
  messagingSenderId: "424091491292",
  appId: "1:424091491292:web:6ee47239506e6245164d19",
  measurementId: "G-QX6LW4JD8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);