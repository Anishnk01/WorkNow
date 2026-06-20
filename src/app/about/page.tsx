'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About WorkNow</h1>
            <p className="text-xl text-blue-100">
              Connecting trusted workers with people who need their help
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              At WorkNow, we believe that finding reliable help shouldn\'t be complicated. Our mission is
              to create a platform where verified workers and customers can connect easily, securely, and
              fairly.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We\'re building the future of the gig economy by making it transparent, trustworthy, and
              beneficial for everyone involved.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust</h3>
                <p className="text-gray-600">
                  We verify every worker and protect every transaction to build lasting trust.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality</h3>
                <p className="text-gray-600">
                  We maintain high standards for workers and excellent service for customers.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We constantly improve our platform with new features and better technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              WorkNow was founded in 2024 with a simple idea: make it easy to find trustworthy workers
              for everyday tasks. What started as a small project has grown into a platform serving thousands
              of users across multiple cities.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, we\'re proud to connect verified professionals with customers who need their skills,
              creating opportunities and building communities one job at a time.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
