// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* SyncStream */}
        <div>
          <h2 className="text-white font-bold text-lg mb-2">🎬 SyncStream</h2>
          <p>Watch together, anywhere. The ultimate collaborative video streaming platform.</p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="hover:text-white">🐦</a>
            <a href="#" className="hover:text-white">📸</a>
            <a href="#" className="hover:text-white">📘</a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-2">Product</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Use Cases</a></li>
            <li><a href="#" className="hover:text-white">Security</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-2">Resources</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-white">Documentation</a></li>
            <li><a href="#" className="hover:text-white">API Reference</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Community</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-2">Company</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Legal</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
