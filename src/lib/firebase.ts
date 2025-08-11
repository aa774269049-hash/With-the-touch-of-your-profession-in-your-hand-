// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKCkZdIHkl48-Q6j2pGaVmoPMBAEXaZkY",
  authDomain: "your-career-with-a-touch.firebaseapp.com",
  projectId: "your-career-with-a-touch",
  storageBucket: "your-career-with-a-touch.firebasestorage.app",
  messagingSenderId: "664714789463",
  appId: "1:664714789463:web:3bcba2efebd0658b149912",
  measurementId: "G-WMG8E7LD88"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
let analytics;
if (typeof window !== 'undefined') {
  try {
    analytics = getAnalytics(app);
  } catch (error) {
    console.log('Failed to initialize Analytics', error);
  }
}


export { app, auth, analytics };
