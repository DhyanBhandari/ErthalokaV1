// Firebase configuration - replace with your project's details
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Example user document structure
// users/{uid} {
//   email: string,
//   role: 'Warrior' | 'Ambassador' | 'Resident' | 'Admin',
//   carbonCoins: number,
//   subscriptionStartDate: Timestamp,
//   membershipDetails: {
//     type: string,
//     amount: number,
//     currency: string,
//     utr?: string
//   },
//   access: {
//     coWorkPondi: boolean,
//     productDiscount: boolean,
//     priorityEvents: boolean
//   }
// }
