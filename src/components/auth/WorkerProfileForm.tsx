'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CATEGORIES = [
  'Plumbing',
  'Electrical',
  'Carpentry',
  'Cleaning',
  'Painting',
  'Gardening',
  'Moving',
  'Tutoring',
  'Pet Care',
  'Fitness Coaching',
];

export function WorkerProfileForm() {
  const router = useRouter();
  const [bio, setBio] = useState('');
  const [experience, setExperience] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!bio.trim() || !experience.trim() || !hourlyRate || selectedCategories.length === 0) {
        setError('Please fill in all fields and select at least one category');
        setLoading(false);
        return;
      }

      const rate = parseFloat(hourlyRate);
      if (isNaN(rate) || rate <= 0) {
        setError('Please enter a valid hourly rate');
        setLoading(false);
        return;
      }

      const workerData = {
        bio: bio.trim(),
        experience: experience.trim(),
        hourlyRate: rate,
        categories: selectedCategories,
      };

      const response = await fetch('/api/auth/complete-worker-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(workerData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to complete worker profile');
      }

      router.push('/worker/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900">Complete Your Worker Profile</h2>

        {error && (
          <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Professional Bio
          </label>
          <textarea
            placeholder="Describe your professional background and expertise"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            disabled={loading}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:bg-gray-50"
          />
        </div>

        {/* Experience */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Years of Experience
          </label>
          <input
            type="text"
            placeholder="e.g., 5 years, 10 years"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            disabled={loading}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:bg-gray-50"
          />
        </div>

        {/* Hourly Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hourly Rate ($)
          </label>
          <input
            type="number"
            placeholder="e.g., 50"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            disabled={loading}
            min="0"
            step="0.01"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:bg-gray-50"
          />
        </div>

        {/* Categories */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Select Your Services (select at least one)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryToggle(category)}
                disabled={loading}
                className={`p-3 rounded-lg border-2 transition text-sm font-medium ${
                  selectedCategories.includes(category)
                    ? 'border-blue-600 bg-blue-50 text-blue-700'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                } disabled:opacity-50`}
              >
                {selectedCategories.includes(category) && (
                  <span className="mr-2">✓</span>
                )}
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading || !bio || !experience || !hourlyRate || selectedCategories.length === 0}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 font-medium"
        >
          {loading ? 'Saving...' : 'Complete Profile'}
        </button>
      </div>
    </div>
  );
}
