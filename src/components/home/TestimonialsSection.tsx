'use client';

const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    image: '👩',
    text: 'I needed urgent plumbing work and found a verified worker within hours. The entire process was smooth and professional.',
    rating: 5,
  },
  {
    name: 'Mike Rodriguez',
    role: 'Professional Worker',
    image: '👨',
    text: 'WorkNow has transformed how I find clients. The platform is easy to use and I get consistent work.',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    role: 'Business Owner',
    image: '👩',
    text: 'We use WorkNow for all our facility maintenance needs. Their workers are reliable and professional.',
    rating: 5,
  },
  {
    name: 'David Smith',
    role: 'Electrician',
    image: '👨',
    text: 'Excellent platform for building my client base. The secure payment system gives me confidence.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          What People Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-lg p-8 hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
