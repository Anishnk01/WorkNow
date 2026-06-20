'use client';

import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { Navbar } from '@/components/layout/Navbar';

export default function Home() {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-blue-600">WorkNow</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with skilled workers for various services or offer your expertise to earn money.
            </p>

            {!isAuthenticated && !isLoading && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/login"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition inline-block font-medium"
                >
                  Get Started
                </Link>
                <a
                  href="#features"
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition inline-block font-medium"
                >
                  Learn More
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Choose WorkNow?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Find Services
                </h3>
                <p className="text-gray-600">
                  Browse through skilled workers in various categories and find the perfect match for your needs.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Offer Skills
                </h3>
                <p className="text-gray-600">
                  Showcase your expertise, build your reputation, and earn money by offering your services.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Trusted Community
                </h3>
                <p className="text-gray-600">
                  Verified workers and customer reviews ensure a safe and reliable experience for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-8">
              Join thousands of users finding and offering services on WorkNow today.
            </p>
            {!isAuthenticated && !isLoading && (
              <Link
                href="/login"
                className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium"
              >
                Sign Up Now
              </Link>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
