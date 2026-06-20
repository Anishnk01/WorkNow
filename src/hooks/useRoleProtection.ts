'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from './useAuth';

type AllowedRoles = ('CUSTOMER' | 'WORKER' | 'ADMIN')[];

export function useRoleProtection(allowedRoles: AllowedRoles) {
  const router = useRouter();
  const { user, isLoading, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    if (!user?.role || !allowedRoles.includes(user.role)) {
      // User doesn't have permission
      if (user?.role === 'WORKER') {
        router.push('/worker/dashboard');
      } else if (user?.role === 'ADMIN') {
        router.push('/admin/dashboard');
      } else {
        router.push('/customer/dashboard');
      }
    }
  }, [isLoading, isAuthenticated, user, allowedRoles, router]);

  return { user, isLoading };
}
