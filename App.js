import React, { useState } from 'react';
import HomePage from './pages/HomePage';
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

  return (
    <HomePage
      showLogin={showLogin}
      showSignup={showSignup}
      openLogin={openLogin}
      openSignup={openSignup}
      closeModals={closeModals}
    />
  );
}

export default App;
