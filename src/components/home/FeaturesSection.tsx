'use client';

const FEATURES = [
  {
    icon: '✓',
    title: 'Verified Workers',
    description: 'All workers are background checked and verified',
  },
  {
    icon: '⚡',
    title: 'Fast Hiring',
    description: 'Get matched with workers in minutes',
  },
  {
    icon: '🔒',
    title: 'Secure Payments',
    description: 'Safe and secure payment system for peace of mind',
  },
  {
    icon: '⭐',
    title: 'Ratings & Reviews',
    description: 'Transparent feedback from real users',
  },
  {
    icon: '🔔',
    title: 'Real-time Notifications',
    description: 'Stay updated on your jobs instantly',
  },
  {
    icon: '📅',
    title: 'Easy Booking',
    description: 'Simple scheduling and booking process',
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Why Choose WorkNow?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
