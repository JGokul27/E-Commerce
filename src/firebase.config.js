import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAbADyhXzAvAlJH-Fwa6_i4BHVV7GKoMGQ",
  authDomain: "maltimart-41e55.firebaseapp.com",
  projectId: "maltimart-41e55",
  storageBucket: "maltimart-41e55.appspot.com",
  messagingSenderId: "95314982679",
  appId: "1:95314982679:web:71699e6102f59c01aa2952"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app