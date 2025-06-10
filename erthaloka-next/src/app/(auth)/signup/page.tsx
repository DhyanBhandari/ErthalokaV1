'use client';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import Link from 'next/link';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="p-8 bg-gray-800 rounded-lg shadow-xl bg-opacity-90">
        <h1 className="text-2xl mb-4 text-center">Sign Up</h1>
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-green-500 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-green-500 focus:outline-none"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">
          Sign Up
        </button>
        <p className="text-center mt-4 text-sm">
          Already have an account? <Link className="text-blue-400" href="/signin">Sign in</Link>
        </p>
      </form>
    </div>
  );
}
