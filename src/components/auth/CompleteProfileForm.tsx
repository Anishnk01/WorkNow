'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RoleSelectionCard } from './RoleSelectionCard';

interface CompleteProfileFormProps {
  onSubmit?: (data: any) => void;
}

export function CompleteProfileForm({ onSubmit }: CompleteProfileFormProps) {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [role, setRole] = useState<'CUSTOMER' | 'WORKER' | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!fullName.trim() || !phone.trim() || !city.trim() || !role) {
        setError('Please fill in all fields');
        setLoading(false);
        return;
      }

      const profileData = {
        fullName: fullName.trim(),
        phone: phone.trim(),
        city: city.trim(),
        role,
      };

      const response = await fetch('/api/auth/complete-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to complete profile');
      }

      if (onSubmit) {
        onSubmit(profileData);
      }

      // Redirect based on role
      if (role === 'WORKER') {
        router.push('/worker/complete-profile');
      } else {
        router.push('/customer/dashboard');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="space-y-8">
        {/* Basic Information */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Profile</h2>

          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <input
                type="text"
                placeholder="Enter your city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:bg-gray-50"
              />
            </div>
          </div>
        </div>

        {/* Role Selection */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Your Role</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RoleSelectionCard
              role="CUSTOMER"
              isSelected={role === 'CUSTOMER'}
              onSelect={setRole}
            />
            <RoleSelectionCard
              role="WORKER"
              isSelected={role === 'WORKER'}
              onSelect={setRole}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading || !fullName || !phone || !city || !role}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 font-medium"
        >
          {loading ? 'Saving...' : 'Continue'}
        </button>
      </div>
    </div>
  );
}
