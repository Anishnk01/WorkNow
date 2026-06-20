import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">WorkNow</h1>
            </div>
            <div className="flex gap-4">
              <Link
                href="/login"
                className="px-4 py-2 text-gray-700 hover:text-primary transition"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-5xl font-bold mb-6">Find Workers Instantly</h2>
            <p className="text-xl mb-8 opacity-90">
              Need help with a quick task? WorkNow connects you with nearby workers
              ready to help right now.
            </p>
            <div className="flex gap-4">
              <Link
                href="/customer/jobs"
                className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition"
              >
                Post a Job
              </Link>
              <Link
                href="/worker/profile"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition"
              >
                Become a Worker
              </Link>
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
            <p className="text-white text-center text-lg">Hero Image / Illustration</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose WorkNow?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Instant Matching",
                description: "Get matched with nearby workers within minutes",
              },
              {
                title: "Secure & Verified",
                description: "All workers are verified for your peace of mind",
              },
              {
                title: "Real-time Updates",
                description: "Track progress and communicate instantly",
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 border border-gray-200 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
