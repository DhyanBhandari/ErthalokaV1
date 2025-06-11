'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth, app } from '../firebase/config';

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: true,
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const firebaseDisabled = !app;

  useEffect(() => {
    if (firebaseDisabled) {
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return unsubscribe;
  }, [firebaseDisabled]);

  const logout = async () => {
    if (!firebaseDisabled) {
      await auth.signOut();
    }
  };

  return (
    <AuthContext.Provider
      value={{ user: firebaseDisabled ? null : user, loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
