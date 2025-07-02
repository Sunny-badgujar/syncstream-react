import { Link } from 'react-router-dom';
// src/components/Header.jsx
export default function Header() {
  return (
    <header className="bg-gray-950 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-500 tracking-wide">
          🎬 SyncStream
        </h1>
        <div className="flex gap-3">
          <Link
            to="/login"
            className="text-sm px-4 py-2 border border-purple-600 rounded hover:bg-purple-600 hover:text-white transition"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="text-sm px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 transition"
          >
            Sign Up Free
          </Link>
        </div>
      </div>  
    </header>
  );
}
