import React from "react";
import "./notespacemobiledownload.css";

export default function NoteSpaceMobileDownload() {
  return (
    <section className="nsdl-section" id="download">
      <h1 className="nsdl-title">Download NoteSpace</h1>
      <p className="nsdl-subtitle">Available on Android devices</p>

      <div className="nsdl-card">
        <div className="nsdl-icon">📱</div>
        <h2 className="nsdl-card-title">Mobile App</h2>
        <p className="nsdl-card-text">
          Study on the go with our mobile app. Available for Android.
        </p>

        <button className="nsdl-btn nsdl-android">⬇ Download for Android</button>
      </div>
    </section>
  );
}
