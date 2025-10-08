"use client";

import { useEffect } from "react";

export default function PrivacyPolicyPopup({ open, onClose }) {
  // Prevent background scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          width: "90%",
          maxWidth: "800px",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "24px",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #ddd",
            paddingBottom: "12px",
            marginBottom: "16px",
          }}
        >
          <h1 style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>
            Privacy Policy
          </h1>
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#666",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div style={{ color: "#333", lineHeight: 1.6, fontSize: "15px" }}>
          <p>
            Notespace (“we”, “our”, or “us”) operates the Notespace mobile
            application and the website{" "}
            <a
              href="https://note-space-psi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2563eb", textDecoration: "underline" }}
            >
              https://note-space-psi.vercel.app
            </a>{" "}
            (collectively, the “Services”). Your privacy is important to us, and
            we are committed to protecting the personal information you share
            with us through our Services.
          </p>

          <p>
            This Privacy Policy explains how we collect, use, and safeguard your
            information when you use the Notespace app or website.
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "20px" }}>
            1. Information We Collect
          </h2>
          <ul style={{ marginLeft: "20px" }}>
            <li>
              <b>Account Information:</b> Email address and password for
              login/signup.
            </li>
            <li>
              <b>App Usage Data:</b> Information about how you use the app, such
              as session duration or errors.
            </li>
            <li>
              <b>Payment Data:</b> If you purchase access to notes, payment is
              processed securely via Google Play. We do not store credit card
              information on our servers.
            </li>
            <li>
              <b>Note:</b> At this time, Notespace does not collect location,
              contacts, or personal identifiers beyond email for login purposes.
            </li>
          </ul>

          <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "20px" }}>
            2. How We Use Your Information
          </h2>
          <ul style={{ marginLeft: "20px" }}>
            <li>Authenticate your account and provide access to Notespace.</li>
            <li>Grant access to purchased notes or premium content.</li>
            <li>Improve app functionality and performance.</li>
            <li>Respond to inquiries or provide customer support.</li>
          </ul>

          <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "20px" }}>
            3. Data Sharing and Disclosure
          </h2>
          <p>
            We do not sell or share your personal information with third parties
            for marketing purposes. We may share limited information with
            trusted service providers only to operate the app effectively (e.g.,
            hosting, analytics).
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "20px" }}>
            4. Data Security
          </h2>
          <p>
            All personal information transmitted through Notespace is encrypted
            in transit using HTTPS. We maintain reasonable administrative,
            technical, and physical safeguards to protect user information from
            unauthorized access.
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "20px" }}>
            5. Data Retention and Account Deletion
          </h2>
          <p>
            Your notes and account data are retained until you request deletion.
            To delete your account and all associated data, visit our{" "}
            <b>Delete Account</b> page. Some account metadata may be retained
            for up to 30 days for backup and recovery purposes.
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "20px" }}>
            6. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically. The most recent
            version will always be available at{" "}
            <a
              href="https://note-space-psi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2563eb", textDecoration: "underline" }}
            >
              https://note-space-psi.vercel.app
            </a>
            . Your continued use of Notespace constitutes acceptance of any
            updates.
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "20px" }}>
            7. Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy or your data:
            <br />
            Email:{" "}
            <a
              href="mailto:notespace31@gmail.com"
              style={{ color: "#2563eb", textDecoration: "underline" }}
            >
              notespace31@gmail.com
            </a>
            <br />
            Website:{" "}
            <a
              href="https://note-space-psi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2563eb", textDecoration: "underline" }}
            >
              https://note-space-psi.vercel.app
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
