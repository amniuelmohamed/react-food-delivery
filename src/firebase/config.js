import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyCNOUotqPii3WqqJ2Lpe_44ycW7zNTa1H4",
    authDomain: "fooddelivery-23f82.firebaseapp.com",
    projectId: "fooddelivery-23f82",
    storageBucket: "fooddelivery-23f82.appspot.com",
    messagingSenderId: "867123223195",
    appId: "1:867123223195:web:03c483a0d95ad45c62043e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
