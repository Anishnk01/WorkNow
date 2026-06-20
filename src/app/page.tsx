export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to WorkNow</h1>
        <p className="text-xl text-gray-600 mb-8">
          Connect with skilled workers for various services
        </p>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-700 mb-4">
            Backend setup is complete! The project structure, database schema, and seed data
            are ready.
          </p>
          <p className="text-sm text-gray-500">
            Check the database with: <code className="bg-gray-100 px-2 py-1">npm run db:studio</code>
          </p>
        </div>
      </div>
    </main>
  );
}
