// Firebase App (the core Firebase SDK) is always required and must be listed first
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
import {
  getFirestore,
  doc,
  onSnapshot,
  updateDoc,
  increment,
  collection,
  addDoc,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js';

// TODO: Replace with your project's config
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * Listen to changes in the user's carbon coin balance.
 * @param {string} uid user id
 * @param {(balance:number)=>void} callback function to receive balance updates
 */
export function listenToCarbonCoins(uid, callback) {
  const userRef = doc(db, 'users', uid);
  return onSnapshot(userRef, (snap) => {
    const data = snap.exists() ? snap.data().carbonCoins || 0 : 0;
    callback(data);
  });
}

/**
 * Reward carbon coins to the user and log a transaction.
 * @param {string} uid user id
 * @param {number} amount amount of coins to add
 * @param {string} type transaction type (purchase, reward, admin_add, admin_remove, manual_upi_reward_verification)
 * @param {string} productId optional product/event id
 * @param {string} description text description of the transaction
 */
export async function addTransaction(uid, amount, type, productId = '', description = '') {
  const userRef = doc(db, 'users', uid);
  await updateDoc(userRef, { carbonCoins: increment(amount) });
  const txRef = collection(userRef, 'transactions');
  await addDoc(txRef, {
    type,
    amount,
    productId,
    timestamp: serverTimestamp(),
    description
  });
}

// Example usage: simulate rewarding coins after purchase
export async function simulateProductPurchase(uid, productId, coins) {
  await addTransaction(uid, coins, 'purchase', productId, 'Product purchase reward');
}

// Demonstration setup - replace with actual authenticated user ID
const demoUid = 'demoUser';
const walletCardEl = document.getElementById('walletCard');
const walletBalanceEl = document.getElementById('walletBalance');

if (walletCardEl && walletBalanceEl) {
  walletCardEl.classList.remove('hidden');
  let prev = 0;
  listenToCarbonCoins(demoUid, (bal) => {
    walletBalanceEl.textContent = bal;
    if (bal !== prev) {
      walletBalanceEl.classList.add('glow');
      setTimeout(() => walletBalanceEl.classList.remove('glow'), 600);
      prev = bal;
    }
  });
}
