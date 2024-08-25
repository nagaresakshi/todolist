// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

console.log('API Key:',
    import.meta.env.VITE_API_KEY);
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,

    authDomain: "todo-list-b64a1.firebaseapp.com",
    projectId: "todo-list-b64a1",
    storageBucket: "todo-list-b64a1.appspot.com",
    messagingSenderId: "460189349821",
    appId: "1:460189349821:web:708d41a25036302c5584d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);