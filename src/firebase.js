// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

import {getAnalytics, getFirestore} from 'firebase/analytics'
const firebaseConfig = {
  apiKey: "AIzaSyAZPPTDBQjoPYsOmYKaVSQxj5oRcNbhQ-M",
  authDomain: "react-hotel-app-authentication.firebaseapp.com",
  projectId: "react-hotel-app-authentication",
  storageBucket: "react-hotel-app-authentication.appspot.com",
  messagingSenderId: "746768441083",
  appId: "1:746768441083:web:dbeb96d3d41b8702fa5a5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app)
const analytics = getAnalytics(app);

export {auth, db};