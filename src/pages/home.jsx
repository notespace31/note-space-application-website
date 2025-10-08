import "./styles/home.css";
import applogo from "../assets/images/applogo.png";
import { useState } from "react";

import HeroSection from "./components/herosection";
import WhyChooseSection from "./components/choose";
import TransformSection from "./components/tranfrom";
import NoteSpaceMobileDownload from "./components/notespacemobiledownload";
import Footer from "./components/footer";
import { FaBars, FaTimes } from "react-icons/fa";

export default function HomeScreen() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home-page-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <img src={applogo} alt="logo" className="nav-logo" />
          <h2 className="nav-title">NoteSpace</h2>
        </div>

        {/* Hamburger Icon (mobile) */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links */}
        <div className={`nav-links-container ${menuOpen ? "open" : ""}`}>
          <div className="nav-links">
            <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#benefits" onClick={() => setMenuOpen(false)}>Benefits</a>
            <a href="#download" onClick={() => setMenuOpen(false)}>Download</a>
          </div>
        </div>
      </nav>

      <HeroSection />
      <WhyChooseSection />
      <TransformSection />
      <NoteSpaceMobileDownload />
      <Footer />
    </div>
  );
}
