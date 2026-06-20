'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">How WorkNow Works</h1>
            <p className="text-xl text-blue-100">
              Get started in four simple steps
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
          <HowItWorksSection />
        </section>

        {/* Additional Info */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Getting Started</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">For Customers</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">1.</span>
                    <span>Sign up and verify your identity</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">2.</span>
                    <span>Post a job with details and budget</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">3.</span>
                    <span>Review proposals from workers</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">4.</span>
                    <span>Chat and finalize details</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">5.</span>
                    <span>Pay securely through the platform</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">For Workers</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">1.</span>
                    <span>Sign up as a worker</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">2.</span>
                    <span>Complete your profile with skills</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">3.</span>
                    <span>Get verified through our process</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">4.</span>
                    <span>Browse and apply for jobs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">5.</span>
                    <span>Complete jobs and earn money</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
