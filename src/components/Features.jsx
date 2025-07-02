// src/components/Features.jsx
export default function Features() {
  const features = [
    {
      title: 'Watch in Sync',
      desc: 'Everyone stays perfectly synced — no delays, no spoilers.',
      icon: '🎬',
    },
    {
      title: 'Voice Chat',
      desc: 'Talk with friends live while watching — like a virtual movie night.',
      icon: '🎧',
    },
    {
      title: 'Cross-Device Support',
      desc: 'Works seamlessly on desktop, tablet, or phone.',
      icon: '📱',
    },
    {
      title: 'Private or Public Rooms',
      desc: 'Host private parties or join public streams.',
      icon: '🔒',
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Key Features of <span className="text-purple-500">SyncStream</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
