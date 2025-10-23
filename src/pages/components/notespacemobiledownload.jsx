import React from "react";
import "./notespacemobiledownload.css";
import { Download, Smartphone } from "lucide-react";

export default function NoteSpaceMobileDownload() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/downloads/NoteSpace.apk";
    link.download = "NoteSpace.apk";
    link.click();
  };

  return (
    <section className="nsdl-section" id="download">
      <h1 className="nsdl-title">Download NoteSpace</h1>
      <p className="nsdl-subtitle">Study smarter, anywhere — Android only</p>

      <div className="nsdl-card">
        <div className="nsdl-icon">
          <Smartphone size={40} />
        </div>
        <h2 className="nsdl-card-title">Mobile App</h2>
        <p className="nsdl-card-text">
          Access all your study materials and notes anytime with the official
          NoteSpace app.
        </p>

        <button className="nsdl-btn" onClick={handleDownload}>
          <Download size={20} /> Download for Android
        </button>
      </div>
    </section>
  );
}
