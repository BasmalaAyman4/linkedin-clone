import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDHJCYGMHFNQsaysnErU6u1CjS-IjIrUIc",
    authDomain: "linkedin-clone-ef21d.firebaseapp.com",
    projectId: "linkedin-clone-ef21d",
    storageBucket: "linkedin-clone-ef21d.appspot.com",
    messagingSenderId: "380761036858",
    appId: "1:380761036858:web:06bd6c3b31c50394727d03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const provider = new GoogleAuthProvider();
export default app;
