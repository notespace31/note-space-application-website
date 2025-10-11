import React, { useState } from "react";
import "./footer.css";
import PrivacyPolicyPopup from "./privacy-policy";
import TermsAndServicesPopup from "./terms-and-services-popup";
import RefundPolicyPopup from "./refund-policy-page";

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showRefund, setShowRefund] = useState(false);

  return (
    <div className="ns-wrapper">
      {/* Gradient Section */}
      <section className="ns-hero">
        <h1 className="ns-hero-title">Ready to Transform Your Studies?</h1>
        <p className="ns-hero-subtitle">
          Join 10,000+ students who are already studying smarter with NoteSpace
        </p>
        <button className="ns-hero-button">
          Get Started Free
        </button>
      </section>

      {/* ✅ Popups */}
      <PrivacyPolicyPopup open={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <TermsAndServicesPopup open={showTerms} onClose={() => setShowTerms(false)} />
      <RefundPolicyPopup open={showRefund} onClose={() => setShowRefund(false)} />

      {/* Footer */}
      <footer className="ns-footer">
        <div className="ns-footer-content">
          <div className="ns-footer-col">
            <h2 className="ns-footer-logo">NoteSpace</h2>
            <p className="ns-footer-text">
              Empowering students to achieve academic excellence through smart learning.
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
              <li>
                <a href="mailto:notespace31@gmail.com">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="ns-footer-col">
            <h3 className="ns-footer-heading">Legal</h3>
            <ul className="ns-footer-list">
              <li onClick={() => setShowPrivacy(true)}>Privacy Policy</li>
              <li onClick={() => setShowTerms(true)}>Terms of Service</li>
              <li onClick={() => setShowRefund(true)}>Refund Policy</li>
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
