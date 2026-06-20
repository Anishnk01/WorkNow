'use client';

import Link from 'next/link';

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-blue-100 mb-8">
          Join thousands of users finding and offering services on WorkNow today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/login"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold"
          >
            Find Workers
          </Link>
          <Link
            href="/register"
            className="inline-block px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition font-semibold"
          >
            Become a Worker
          </Link>
        </div>
      </div>
    </section>
  );
}
