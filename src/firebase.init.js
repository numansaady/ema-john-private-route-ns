// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-X_D90zK3d4laz0hCouwOw4KJSWj-gjA",
  authDomain: "ema-john-private-route-ns.firebaseapp.com",
  projectId: "ema-john-private-route-ns",
  storageBucket: "ema-john-private-route-ns.appspot.com",
  messagingSenderId: "999674767312",
  appId: "1:999674767312:web:fa2a2ea23b6198011cfbd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;