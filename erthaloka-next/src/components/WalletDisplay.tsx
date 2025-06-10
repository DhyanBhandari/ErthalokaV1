import { useEffect, useState } from 'react';
import { doc, onSnapshot, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

/**
 * WalletDisplay component shows the user's current Carbon Coin balance.
 * Firestore document structure:
 *   users/{uid} -> { carbonCoins: number }
 *   users/{uid}/transactions/{transactionId}
 */
export default function WalletDisplay() {
  const [balance, setBalance] = useState<number>(0);
  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;
    const unsub = onSnapshot(doc(db, 'users', user.uid), snap => {
      const coins = snap.exists() ? snap.data().carbonCoins || 0 : 0;
      setBalance(coins);
    });
    return () => unsub();
  }, [auth, db]);

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md inline-block">
      <span className="text-4xl font-extrabold text-accent-yellow">{balance}</span>
    </div>
  );
}
