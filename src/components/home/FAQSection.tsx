'use client';

import { useState } from 'react';

const FAQS = [
  {
    question: 'How do I post a job?',
    answer:
      'Create an account, go to your dashboard, and click "Post a Job". Fill in the details about what you need done, and workers will start applying.',
  },
  {
    question: 'Are the workers verified?',
    answer:
      'Yes, all workers on WorkNow go through a verification process including background checks, identity verification, and skill validation.',
  },
  {
    question: 'How are payments handled?',
    answer:
      'Payments are held securely by WorkNow until the job is completed. Once you confirm completion, payment is released to the worker.',
  },
  {
    question: 'What if I\'m not satisfied with the work?',
    answer:
      'We have a dispute resolution process in place. You can raise concerns within 24 hours of job completion, and our team will investigate.',
  },
  {
    question: 'How much does WorkNow cost?',
    answer:
      'WorkNow charges a service fee of 10% on each job. There are no other hidden charges. Workers pay a small commission when they receive payment.',
  },
  {
    question: 'Can I hire a worker for recurring jobs?',
    answer:
      'Absolutely! Once you\'ve worked with a worker, you can hire them again or set up recurring jobs at a negotiated rate.',
  },
  {
    question: 'What if I have an emergency?',
    answer:
      'WorkNow supports urgent job postings. Use the "Urgent" label when posting, and you\'ll get faster responses from available workers.',
  },
  {
    question: 'How do I become a worker?',
    answer:
      'Sign up as a worker, complete your profile with your skills and experience, get verified, and you\'re ready to start receiving jobs.',
  },
  {
    question: 'Is my personal information safe?',
    answer:
      'Yes, we use industry-standard encryption and security measures to protect your personal and payment information.',
  },
  {
    question: 'Do you have a mobile app?',
    answer:
      'We currently operate through our web platform optimized for mobile. A dedicated mobile app is coming soon!',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <button
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full bg-gray-50 rounded-lg p-6 text-left hover:bg-gray-100 transition"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                <span
                  className={`text-2xl transition transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
