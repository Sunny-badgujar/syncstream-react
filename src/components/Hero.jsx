// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-950 to-gray-900 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Watch Together, <span className="text-purple-500">Anywhere</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          SyncStream brings people together through synchronized video streaming and real-time interaction, no matter where you are in the world.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg font-medium transition">
            Create Watch Party
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
            Join Existing Session
          </button>
        </div>
      </div>
    </section>
  );
}
