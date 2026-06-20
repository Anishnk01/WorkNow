'use client';

import { Navbar } from '@/components/layout/Navbar';
import { WorkerProfileForm } from '@/components/auth/WorkerProfileForm';
import { useRoleProtection } from '@/hooks/useRoleProtection';

export default function WorkerCompleteProfilePage() {
  const { isLoading } = useRoleProtection(['WORKER']);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <WorkerProfileForm />
        </div>
      </main>
    </>
  );
}
