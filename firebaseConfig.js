import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAq9BwFdohCgj-3bM57YFF8ht8oO6DQa0E",
  authDomain: "node-intern-task-main.firebaseapp.com",
  projectId: "node-intern-task-main",
  storageBucket: "node-intern-task-main.appspot.com",
  messagingSenderId: "270290452705",
  appId: "1:270290452705:web:53bb039d870f697fdd37a0",
  measurementId: "G-7X43SJGY6J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;