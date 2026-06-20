'use client';

const CATEGORIES = [
  { name: 'Home Helper', icon: '🏠' },
  { name: 'Cleaning', icon: '🧹' },
  { name: 'Electrician', icon: '⚡' },
  { name: 'Plumber', icon: '🔧' },
  { name: 'Carpenter', icon: '🪵' },
  { name: 'Painter', icon: '🎨' },
  { name: 'Furniture Moving', icon: '📦' },
  { name: 'Gardening', icon: '🌿' },
  { name: 'Appliance Repair', icon: '🛠️' },
  { name: 'Construction Helper', icon: '👷' },
];

export function CategoriesSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {CATEGORIES.map((category) => (
            <button
              key={category.name}
              className="group bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition text-center"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition">
                {category.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition">
                {category.name}
              </h3>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
