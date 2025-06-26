// src/firebase.js
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // If you're using Firestore

const firebaseConfig = {
  apiKey: 'AIzaSyAq-kE1UO3YeR4RUe3MIaZV4RCt1lLz98g',
  authDomain: 'your-app.firebaseapp.com',
  projectId: 'greatkidsplatform',
  storageBucket: 'your-app.appspot.com',
  messagingSenderId: '1234567890',
  appId: '1:1234567890:web:abcdefg1234567',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Export this if you're using Firestore
