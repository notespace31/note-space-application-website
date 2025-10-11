"use client";

import { useEffect } from "react";

export default function RefundPolicyPopup({ open, onClose }) {
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
            Refund Policy – NoteSpace
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
            Thank you for using <b>NoteSpace</b>. This Refund Policy explains
            how refunds are handled for any paid features, subscriptions, or
            in-app purchases in the NoteSpace app.
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: 600, marginTop: 20 }}>
            1. General Policy
          </h2>
          <ul style={{ marginLeft: 20 }}>
            <li>
              All payments made through NoteSpace are processed securely via
              Google Play or other authorized payment platforms.
            </li>
            <li>
              Refunds are not automatically provided for subscriptions or in-app
              purchases.
            </li>
            <li>
              By purchasing, you acknowledge that you understand and agree to
              this refund policy.
            </li>
          </ul>

          <h2 style={{ fontSize: "18px", fontWeight: 600, marginTop: 20 }}>
            2. Subscription Refunds
          </h2>
          <p>
            If you purchase a subscription and wish to cancel, you may do so at
            any time via your Google Play account. Cancellation prevents future
            billing but does not automatically refund past payments. Refunds for
            subscriptions are only provided in accordance with Google Play’s
            refund policy.
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: 600, marginTop: 20 }}>
            3. One-Time In-App Purchases
          </h2>
          <p>
            One-time purchases (such as unlocking notes or premium features) are
            generally non-refundable. Exceptions may be considered in rare cases
            such as technical issues that prevent access to the purchased
            content.
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: 600, marginTop: 20 }}>
            4. How to Request a Refund
          </h2>
          <p>
            For purchases made through Google Play:
            <br />
            Visit{" "}
            <a
              href="https://support.google.com/googleplay/answer/2479637"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2563eb", textDecoration: "underline" }}
            >
              Google Play Help – Request a Refund
            </a>
            . <br />
            Provide your order ID, purchase date, and reason for the refund.
            NoteSpace support can assist with technical issues, but final refund
            approval is managed by Google Play.
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: 600, marginTop: 20 }}>
            5. Technical Issues
          </h2>
          <p>
            If a purchased feature is not working due to a bug or error, please
            contact us at{" "}
            <a
              href="mailto:notespace31@gmail.com"
              style={{ color: "#2563eb", textDecoration: "underline" }}
            >
              notespace31@gmail.com
            </a>
            . We may provide a fix, replacement, or credit for the issue. Refunds
            remain subject to Google Play’s policies.
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: 600, marginTop: 20 }}>
            6. Changes to This Policy
          </h2>
          <p>
            NoteSpace reserves the right to update this Refund Policy at any
            time. Updates will take effect immediately upon posting in the app
            or on our website. Continued use of paid features after changes
            constitutes acceptance of the new policy.
          </p>

          <h2 style={{ fontSize: "18px", fontWeight: 600, marginTop: 20 }}>
            Contact Us
          </h2>
          <p>
            For questions about this Refund Policy, please contact:
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
