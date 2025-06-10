'use client';
import { useAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import { doc, getFirestore, onSnapshot } from 'firebase/firestore';

export default function Profile() {
  const { user } = useAuth();
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    if (!user) return;
    const db = getFirestore();
    const unsub = onSnapshot(doc(db, 'users', user.uid), snap => {
      setCoins(snap.exists() ? snap.data().carbonCoins || 0 : 0);
    });
    return unsub;
  }, [user]);

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center">Please sign in to view your profile.</div>;
  }

  return (
    <section className="max-w-3xl mx-auto py-20 space-y-6">
      <h1 className="text-4xl font-bold text-center mb-4">Profile</h1>
      <div className="bg-gray-800 rounded-xl shadow-xl p-6">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Carbon Coins:</strong> {coins}</p>
      </div>
    </section>
  );
}
