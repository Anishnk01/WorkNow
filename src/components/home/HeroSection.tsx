'use client';

import Link from 'next/link';
import { useState } from 'react';

export function HeroSection() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const categories = [
    'All Categories',
    'Home Helper',
    'Cleaning',
    'Electrician',
    'Plumber',
    'Carpenter',
  ];

  const cities = ['All Cities', 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Content */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hire Trusted Workers Near You
          </h1>
          <p className="text-xl text-blue-50 mb-8">
            Find verified workers for small physical jobs in minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold"
            >
              Hire a Worker
            </Link>
            <Link
              href="/register"
              className="inline-block px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition font-semibold"
            >
              Become a Worker
            </Link>
          </div>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-gray-900 text-lg font-semibold mb-4">Find Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button className="w-full mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
            Search Workers
          </button>
        </div>
      </div>
    </section>
  );
}
