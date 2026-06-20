'use client';

export function HowItWorksSection() {
  const customerSteps = [
    {
      number: 1,
      title: 'Post a Job',
      description: 'Describe what you need done',
      icon: '✏️',
    },
    {
      number: 2,
      title: 'Receive Applications',
      description: 'Get offers from verified workers',
      icon: '📬',
    },
    {
      number: 3,
      title: 'Hire a Worker',
      description: 'Choose the best fit for your needs',
      icon: '👤',
    },
    {
      number: 4,
      title: 'Get it Done',
      description: 'Complete the job and pay securely',
      icon: '✅',
    },
  ];

  const workerSteps = [
    {
      number: 1,
      title: 'Create Profile',
      description: 'Set up your worker profile',
      icon: '👨‍💼',
    },
    {
      number: 2,
      title: 'Get Verified',
      description: 'Complete verification process',
      icon: '✓',
    },
    {
      number: 3,
      title: 'Receive Jobs',
      description: 'Get job requests matching your skills',
      icon: '📲',
    },
    {
      number: 4,
      title: 'Earn Money',
      description: 'Complete jobs and receive payments',
      icon: '💰',
    },
  ];

  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-16 text-center">
          How It Works
        </h2>

        {/* Customers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">For Customers</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {customerSteps.map((step) => (
              <div key={step.number} className="relative">
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition h-full">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 mt-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {step.number < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-2xl text-blue-600 font-bold">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Workers */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">For Workers</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {workerSteps.map((step) => (
              <div key={step.number} className="relative">
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition h-full">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 mt-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {step.number < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-2xl text-green-600 font-bold">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
