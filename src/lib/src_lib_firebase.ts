import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// It's best practice to use environment variables for config values.
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

// For demonstration, here's your original config (fixing storageBucket typo):
const firebaseConfig = {
  apiKey: "AIzaSyBKCkZdIHkl48-Q6j2pGaVmoPMBAEXaZkY",
  authDomain: "your-career-with-a-touch.firebaseapp.com",
  projectId: "your-career-with-a-touch",
  storageBucket: "your-career-with-a-touch.appspot.com",
  messagingSenderId: "664714789463",
  appId: "1:664714789463:web:3bcba2efebd0658b149912",
  measurementId: "G-WMG8E7LD88"
};

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