import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjBjeh_R0_bzIjtGxyU4uw_6-5bjcvnjw",
  authDomain: "booking-app-e4c96.firebaseapp.com",
  projectId: "booking-app-e4c96",
  storageBucket: "booking-app-e4c96.appspot.com",
  messagingSenderId: "748824737495",
  appId: "1:748824737495:web:00780c3ee3a68d41dae292",
};

const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);

// Google Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});








