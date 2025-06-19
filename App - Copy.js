import React, { useState } from 'react';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const openLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const openSignup = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const closeModals = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Logged in successfully!');
    closeModals();
  };

  const handleSignup = (e) => {
    e.preventDefault();
    alert('Signed up successfully!');
    closeModals();
  };

  return (
    <div className="App">
      {/* Header */}
      <header>
        <div className="logo">📽️ SyncStream</div>
        <div className="nav-links">
          <a href="#">Features</a>
          <a href="#">How It Works</a>
          <a href="#">Use Cases</a>
        </div>
        <div className="nav-buttons">
          <button className="login-btn" onClick={openLogin}>Log In</button>
          <button className="signup-btn" onClick={openSignup}>Sign Up Free</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Watch Together, <span>Anywhere</span></h1>
        <p>SyncStream brings people together through synchronized video streaming and real-time interaction, no matter where you are in the world.</p>
        <div className="buttons">
          <a href="/watch"><button className="btn-primary">Create Watch Party</button></a>
          <a href="/watch"><button className="btn-secondary">Join Existing Session</button></a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-col">
          <h4>📽️ SyncStream</h4>
          <p>Watch together, anywhere. The ultimate collaborative video streaming platform.</p>
          <div className="social">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
            <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" />
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="LinkedIn" />
          </div>
        </div>

        <div className="footer-col">
          <h4>Product</h4>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Use Cases</a>
          <a href="#">Security</a>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <a href="#">Documentation</a>
          <a href="#">API Reference</a>
          <a href="#">Blog</a>
          <a href="#">Community</a>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
          <a href="#">Legal</a>
        </div>
      </footer>

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="modal">
          <div className="modal-content">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Log In</button>
            </form>
            <p>No account? <span className="link" onClick={openSignup}>Sign up</span></p>
            <span className="close" onClick={closeModals}>×</span>
          </div>
        </div>
      )}

      {/* SIGNUP MODAL */}
      {showSignup && (
        <div className="modal">
          <div className="modal-content">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <span className="link" onClick={openLogin}>Log in</span></p>
            <span className="close" onClick={closeModals}>×</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;