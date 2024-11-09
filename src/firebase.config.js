import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyD8K-ZrMB5VeO_55dwVWrGkWlbJayTEAf8",
  authDomain: "multimart-175c0.firebaseapp.com",
  projectId: "multimart-175c0",
  storageBucket: "multimart-175c0.firebasestorage.app",
  messagingSenderId: "918198689123",
  appId: "1:918198689123:web:1c6a94ba0d8417195e0756"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app