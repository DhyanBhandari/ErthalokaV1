import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

const missing =
  !process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
  !process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ||
  !process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ||
  !process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ||
  !process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ||
  !process.env.NEXT_PUBLIC_FIREBASE_APP_ID;

if (missing) {
  console.warn('Firebase environment variables not set. Running in demo mode.');
}

const firebaseConfig = missing
  ? {
      apiKey: 'demo',
      authDomain: 'demo',
      projectId: 'demo',
    }
  : {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
    };

export const app = missing
  ? undefined
  : !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

export const auth = app ? getAuth(app) : ({} as unknown as Auth);
export const db = app ? getFirestore(app) : ({} as unknown as Firestore);
export const firebaseEnabled = !missing;
export default app;
