'use client';

import { Navbar } from '@/components/layout/Navbar';
import { useRoleProtection } from '@/hooks/useRoleProtection';

export default function CustomerDashboard() {
  const { user, isLoading } = useRoleProtection(['CUSTOMER']);

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
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Welcome, {user?.fullName}!
          </h1>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600 mb-4">
              This is your customer dashboard. UI components coming soon!
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Posted Jobs</h3>
                <p className="text-gray-600">No jobs posted yet</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pending Requests</h3>
                <p className="text-gray-600">No pending requests</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
