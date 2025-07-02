// src/components/HowItWorks.jsx
export default function HowItWorks() {
  const steps = [
    {
      step: '1',
      title: 'Create a Room',
      desc: 'Start a new session and set it to private or public.',
    },
    {
      step: '2',
      title: 'Invite Your Friends',
      desc: 'Send a unique link to let your friends join instantly.',
    },
    {
      step: '3',
      title: 'Play & Sync',
      desc: 'Start the video — everyone stays perfectly in sync.',
    },
    {
      step: '4',
      title: 'Talk While You Watch',
      desc: 'Chat or voice call with friends as you enjoy the content together.',
    },
  ];

  return (
    <section className="bg-gray-950 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          How <span className="text-purple-500">SyncStream</span> Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg border border-purple-700 hover:shadow-lg transition"
            >
              <div className="text-3xl text-purple-500 font-bold mb-2">{step.step}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
