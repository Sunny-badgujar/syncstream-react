import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HomePage from "./pages/HomePage";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <HomePage />
      <LoginModal />
      <SignupModal />
      <Footer />
    </div>
  );
}

export default App;