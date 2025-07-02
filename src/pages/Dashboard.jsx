// src/pages/Dashboard.jsx
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard 🎉</h1>
      <p className="text-gray-400 mb-8">
        Here you can create rooms, manage parties, invite friends, and more.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg border border-purple-600">
          <h2 className="text-xl font-semibold mb-2">Create Watch Room</h2>
          <p className="text-sm text-gray-400">Start a new synced stream with your friends.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg border border-purple-600">
          <h2 className="text-xl font-semibold mb-2">Join a Room</h2>
          <p className="text-sm text-gray-400">Use a code to join an existing room.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg border border-purple-600">
          <h2 className="text-xl font-semibold mb-2">Your History</h2>
          <p className="text-sm text-gray-400">Revisit previously joined parties or sessions.</p>
        </div>
      </div>
    </div>
  );
}
