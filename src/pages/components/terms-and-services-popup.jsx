"use client";

import { useEffect } from "react";

export default function TermsAndServicesPopup({ open, onClose }) {
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
            Terms and Services – NoteSpace
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
            Welcome to <b>NoteSpace!</b> These Terms and Services (“Terms”)
            govern your access to and use of the NoteSpace mobile application,
            website, and related services (collectively, the “Service”). By
            using NoteSpace, you agree to these Terms. Please read them
            carefully before using the app.
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: 600, marginTop: 20 }}>
            1. Acceptance of Terms
          </h2>
          <p>
            By downloading, accessing, or using NoteSpace, you confirm that you
            have read, understood, and agree to be bound by these Terms and our{" "}
            <a
              href="https://note-space-psi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2563eb", textDecoration: "underline" }}
            >
              Privacy Policy
            </a>
            . If you do not agree, please do not use the app.
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: 600, marginTop: 20 }}>
            2. Description of Service
          </h2>
          <ul style={{ marginLeft: 20 }}>
            <li>Create, edit, and organize personal notes.</li>
            <li>Sync and store notes securely in the cloud (if available).</li>
            <li>Access notes anytime from supported devices.</li>
            <li>Share notes with others (if you choose).</li>
          </ul>
          <p>
            We may update or add new features to improve your experience at any
            time.
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: 600, marginTop: 20 }}>
            3. Eligibility
          </h2>
          <p>
            You must be at least 13 years old to use NoteSpace. If you are under
            18, you must use the app under the supervision of a parent or
            guardian who agrees to these Terms.
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: 600, marginTop: 20 }}>
            4. User Accounts
          </h2>
          <ul style={{ marginLeft: 20 }}>
            <li>You may need to create an account to use certain features.</li>
            <li>You are responsible for keeping your login information secure.</li>
            <li>
              You agree not to share your account or impersonate another person.
            </li>
            <li>
              If you suspect unauthorized use of your account, notify us
              immediately.
            </li>
          </ul>

          <h2 style={{ fontSize: "18px", fontWeight: 600, marginTop: 20 }}>
            5. User Content
          </h2>
          <ul style={{ marginLeft: 20 }}>
            <li>You retain ownership of the notes and content you create.</li>
            <li>
              By using NoteSpace, you grant us permission to store and process
              your content solely to provide app functionality (e.g., saving,
              syncing).
            </li>
            <li>
              You are responsible for the legality and accuracy of the content
              you upload or share.
            </li>
          </ul>

          <h2 style={{ fontSize: "18px", fontWeight: 600, marginTop: 20 }}>
            6. Prohibited Activities
          </h2>
          <p>You agree not to:</p>
          <ul style={{ marginLeft: 20 }}>
            <li>Use NoteSpace for any illegal or harmful purpose.</li>
            <li>Upload or share malicious, abusive, or infringing content.</li>
            <li>Attempt to hack, disrupt, or reverse-engineer the app.</li>
            <li>Violate the privacy or rights of others.</li>
          </ul>
          <p>
            Violation of these rules may result in account suspension or
            termination.
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: 600, marginTop: 20 }}>
            7. Data and Privacy
          </h2>
          <p>
            Your privacy is important to us. Please review our{" "}
            <a
              href="https://note-space-psi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2563eb", textDecoration: "underline" }}
            >
              Privacy Policy
            </a>{" "}
            to understand how we collect, use, and protect your data.
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: 600, marginTop: 20 }}>
            8. Subscription and Payments (if applicable)
          </h2>
          <p>
            Some features may require a paid subscription or in-app purchases.
            All payments are processed securely through Google Play or other
            authorized platforms. Fees are non-refundable except where required
            by law.
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: 600, marginTop: 20 }}>
            9. Limitation of Liability
          </h2>
          <p>
            NoteSpace and its developers are not responsible for data loss,
            service interruptions, bugs, or damages resulting from use of the
            app. Use of the app is at your own risk.
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: 600, marginTop: 20 }}>
            10. Changes to the Terms
          </h2>
          <p>
            We may update these Terms periodically. Updates take effect once
            posted in the app or on our website. Continued use of NoteSpace
            means you accept the new Terms.
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: 600, marginTop: 20 }}>
            11. Termination
          </h2>
          <p>
            We may suspend or terminate your access if you breach these Terms,
            misuse the app, or cause harm to other users or our systems. You may
            delete your account anytime from within the app settings.
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: 600, marginTop: 20 }}>
            12. Contact Us
          </h2>
          <p>
            If you have questions or concerns about these Terms, please contact
            us at:
            <br />
            📧{" "}
            <a
              href="mailto:notespace31@gmail.com"
              style={{ color: "#2563eb", textDecoration: "underline" }}
            >
              notespace31@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
