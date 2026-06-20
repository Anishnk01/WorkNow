'use client';

import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, getAuthUser } from '@/lib/supabase';
import { useAuthStore } from '@/store/authStore';
import { prisma } from '@/lib/prisma';

export function useAuth() {
  const router = useRouter();
  const { user, isLoading, isAuthenticated, setUser, setLoading, logout } =
    useAuthStore();

  // Initialize auth state
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const authUser = await getAuthUser();
        if (authUser) {
          // Fetch user data from database
          const response = await fetch('/api/auth/user');
          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
          } else {
            setUser({
              id: authUser.id,
              email: authUser.email || '',
            });
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    // Listen to auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        const response = await fetch('/api/auth/user');
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          setUser({
            id: session.user.id,
            email: session.user.email || '',
          });
        }
      } else {
        setUser(null);
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [setUser, setLoading]);

  const signOut = useCallback(async () => {
    try {
      await supabase.auth.signOut();
      logout();
      router.push('/');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  }, [router, logout]);

  return {
    user,
    isLoading,
    isAuthenticated,
    signOut,
  };
}
