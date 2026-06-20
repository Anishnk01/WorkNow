'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { RegisterModal } from '@/components/auth/RegisterModal';

export default function RegisterPage() {
  const [isOpen] = useState(true);

  return (
    <>
      <Navbar />
      <RegisterModal isOpen={isOpen} onClose={() => {}} />
    </>
  );
}
