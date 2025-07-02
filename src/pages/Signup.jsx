// src/pages/Signup.jsx
export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up for SyncStream</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 bg-gray-800 rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-gray-800 rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-gray-800 rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-400 mt-4">
          Already have an account? <a href="/login" className="text-purple-400 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
}
