import React, { useState } from "react";
import LoginModal from "../components/LoginModal";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white relative">
      {/* Top Nav */}
      <header className="flex justify-between items-center px-6 py-4 bg-gray-900 shadow-md">
        <h1 className="text-xl font-bold text-purple-400">🎥 SyncStream</h1>
        <div className="space-x-4">
          <button
            onClick={() => setShowLogin(true)}
            className="px-4 py-2 bg-transparent border border-purple-500 text-purple-400 rounded hover:bg-purple-600 hover:text-white"
          >
            Log In
          </button>
          <a
            href="/signup"
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500"
          >
            Sign Up Free
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="text-center mt-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Watch Together, <span className="text-purple-500">Anywhere</span>
        </h1>
        <p className="text-gray-400 mb-6">
          SyncStream brings people together through synchronized video streaming and real-time interaction.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded">
            Create Watch Party
          </button>
          <button className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded">
            Join Existing Session
          </button>
        </div>
      </main>

      {/* Login Modal */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </div>
  );
};

export default Home;
