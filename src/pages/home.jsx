import "./styles/home.css";
import frameimage from "../assets/images/framehome.png";
import applogo from "../assets/images/applogo.png";
import capicon from "../assets/images/capicon.png";

import {
  FaHome,
  FaBookOpen,
  FaMedal,
  FaChartLine,
  FaFileAlt,
  FaGift,
} from "react-icons/fa";

export default function HomeScreen() {
  return (
    <div className="home-screen-main-container">
      {/* HERO SECTION */}
      <div className="hero-screen-main-container">
        <div className="home-scrren-nav-bar">
          {/* <img src={applogo} alt="logo" /> */}
          <a className="download-btn" href="#downloadid">
            Download
          </a>
        </div>
        <div className="hero-screen-content">
          <div className="hero-screen-content-top">
            <p>Welcome to</p>
            <p>Note Space</p>
          </div>
          <div className="hero-screen-content-bottom">
            <img
              src={frameimage}
              alt="imge"
              className="hero-screen-frame-image"
            />
          </div>
        </div>
        <img src={capicon} className="hero-screen-bg-icon" alt="icon" />
        <div className="hero-screen-liner-gra-layer"></div>
      </div>

      {/* FEATURES SECTION */}
      <div className="features-screen-main-container" id="features">
        <div className="features-screen-top-text">Features</div>

        <div className="features-cards-container">
          <div className="feature-card">
            <FaHome className="feature-icon" />
            <h3>Home Screen</h3>
          </div>

          <div className="feature-card">
            <FaBookOpen className="feature-icon" />
            <h3>Materials</h3>
          </div>

          <div className="feature-card">
            <FaMedal className="feature-icon" />
            <h3>Leaderboard</h3>
          </div>

          <div className="feature-card">
            <FaChartLine className="feature-icon" />
            <h3>Daily Progress</h3>
          </div>

          <div className="feature-card">
            <FaFileAlt className="feature-icon" />
            <h3>Notes & Papers</h3>
          </div>

          <div className="feature-card">
            <FaGift className="feature-icon" />
            <h3>Rewards</h3>
          </div>
        </div>
      </div>

      {/* <hr /> */}

      <div
        style={{
          height: "1px",
          width: "100dvw",
          backgroundColor: "#c5c5c5",
        }}
      ></div>

      {/* FAQ SECTION */}
      <div className="faq-section-main-container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h3>What is Note Space?</h3>
            <p>
              Note Space is a platform where students can track progress, access
              study materials, and compete with peers through leaderboards.
            </p>
          </div>
          <div className="faq-item">
            <h3>Can I download the app right now?</h3>
            <p>
              The app is currently in development. The download section will be
              available soon on Google Play and App Store.
            </p>
          </div>
          <div className="faq-item">
            <h3>Are the study materials free?</h3>
            <p>
              Some materials are free, while premium notes and previous year
              question papers can be purchased directly in the app.
            </p>
          </div>
          <div className="faq-item">
            <h3>How does the leaderboard work?</h3>
            <p>
              The leaderboard is based on points you earn by completing tasks,
              tracking your daily goals, and actively using the app.
            </p>
          </div>
        </div>
      </div>

      {/* DOWNLOAD SECTION */}
      <div className="download-section-main-container" id="downloadid">
        <img src={capicon} alt="icon" />
        <h2>Download App</h2>
        <p className="coming-soon">Coming Soon...</p>

      </div>

      <footer className="footer">
      <div className="footer-container">
        
        {/* Logo / About */}
        <div className="footer-section">
          <h2 className="footer-logo">NoteSpace</h2>
          <p>Your all-in-one space for notes, question papers, and progress tracking.</p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📧 <a href="mailto:support@notespace.com">notespace31@gmail.com</a></p>
          <p>📞 <a href="tel:+918007002923">+91 8007002923</a></p>
          <p>📍 Gadge Nagar, Amravati 444603, Maharashtra, India</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#features">Features</a></li>
            {/* <li><a href="#download">Download App</a></li> */}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} NoteSpace. All rights reserved.
      </div>
    </footer>
    </div>
  );
}
