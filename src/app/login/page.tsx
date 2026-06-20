'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { LoginModal } from '@/components/auth/LoginModal';

export default function LoginPage() {
  const [isOpen] = useState(true);

  return (
    <>
      <Navbar />
      <LoginModal isOpen={isOpen} onClose={() => {}} />
    </>
  );
}
