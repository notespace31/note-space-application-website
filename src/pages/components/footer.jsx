import React from "react";
import "./footer.css";
import { useState } from "react";
import PrivacyPolicyPopup from "./privacy-policy";

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  // ✅ Handler functions
  const handleOpenPrivacy = () => setShowPrivacy(true);
  const handleClosePrivacy = () => setShowPrivacy(false);
  const handleTogglePrivacy = () => setShowPrivacy((prev) => !prev);

  return (
    <div className="ns-wrapper">
      {/* Gradient Section */}
      <section className="ns-hero">
        <h1 className="ns-hero-title">Ready to Transform Your Studies?</h1>
        <p className="ns-hero-subtitle">
          Join 10,000+ students who are already studying smarter with NoteSpace
        </p>
        <button className="ns-hero-button">
          Get Started Free - No Credit Card Required
        </button>
      </section>

      <PrivacyPolicyPopup open={showPrivacy} onClose={handleClosePrivacy} />

      {/* Footer */}
      <footer className="ns-footer">
        <div className="ns-footer-content">
          <div className="ns-footer-col">
            <h2 className="ns-footer-logo">NoteSpace</h2>
            <p className="ns-footer-text">
              Empowering students to achieve academic excellence through smart
              learning.
            </p>
          </div>

          <div className="ns-footer-col">
            <h3 className="ns-footer-heading">Product</h3>
            <ul className="ns-footer-list">
              <li onClick={() => (window.location.href = "#features")}>Features</li>
              <li onClick={() => (window.location.href = "#benefits")}>Benefits</li>
              <li onClick={() => (window.location.href = "#download")}>Download</li>
            </ul>
          </div>

          <div className="ns-footer-col">
            <h3 className="ns-footer-heading">Support</h3>
            <ul className="ns-footer-list">
              <li>Help Center</li>
              <li onClick={() => (window.location.href = "mailto:notespace31@gmail.com")}>Contact Us</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div className="ns-footer-col">
            <h3 className="ns-footer-heading">Legal</h3>
            <ul className="ns-footer-list">
              <li onClick={handleOpenPrivacy}>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Refund Policy</li>
            </ul>
          </div>
        </div>

        <div className="ns-footer-bottom">
          © 2025 NoteSpace. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
