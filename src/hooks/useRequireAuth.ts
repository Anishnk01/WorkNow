'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from './useAuth';

const PUBLIC_ROUTES = ['/', '/login', '/register'];

export function useRequireAuth() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isLoading, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isLoading) return;

    const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

    if (!isAuthenticated && !isPublicRoute) {
      // Redirect unauthenticated users to login
      router.push('/login');
    } else if (isAuthenticated && (pathname === '/login' || pathname === '/register')) {
      // Redirect authenticated users away from auth pages
      if (!user?.role) {
        // User hasn't completed profile yet
        router.push('/complete-profile');
      } else if (user.role === 'WORKER') {
        router.push('/worker/dashboard');
      } else if (user.role === 'ADMIN') {
        router.push('/admin/dashboard');
      } else {
        router.push('/customer/dashboard');
      }
    }
  }, [isAuthenticated, isLoading, user, pathname, router]);

  return { user, isLoading, isAuthenticated };
}
