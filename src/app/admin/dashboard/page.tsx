'use client';

import { Navbar } from '@/components/layout/Navbar';
import { useRoleProtection } from '@/hooks/useRoleProtection';

export default function AdminDashboard() {
  const { user, isLoading } = useRoleProtection(['ADMIN']);

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
            Admin Dashboard
          </h1>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600 mb-4">
              Admin interface coming soon!
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Users</h3>
                <p className="text-2xl font-bold text-blue-600">0</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Jobs</h3>
                <p className="text-2xl font-bold text-green-600">0</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Revenue</h3>
                <p className="text-2xl font-bold text-purple-600">$0</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
