import { FaUsers, FaBookOpen, FaStar, FaTrophy } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90dvh",
        flexDirection: "column",
      }}
    >
      <section className="hero">
        <div className="hero-content">
          <h1>
            <span className="highlight">Study Smarter,</span> <br /> Not Harder
          </h1>
          <p>
            Access 50,000+ premium study materials, earn rewards, and boost your
            grades with India’s #1 study platform for college students.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => (window.location.href = "#features")}>Get Started Free</button>
            <button className="btn-outline" onClick={() => (window.location.href = "/download-app")}>Download App</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-card">
          <div
            style={{
              display: "flex",
              gap: "2px",
            }}
          >
            <FaUsers className="stat-icon" />
            <h3>10K+</h3>
          </div>
          <p>Active Users</p>
        </div>
        <div className="stat-card">
          <div
            style={{
              display: "flex",
              gap: "2px",
            }}
          >
            <FaBookOpen className="stat-icon" />
            <h3>50K+</h3>
          </div>
          <p>Study Materials</p>
        </div>
        <div className="stat-card">
          <div
            style={{
              display: "flex",
              gap: "2px",
            }}
          >
            <FaStar className="stat-icon" />
            <h3>4.8</h3>
          </div>
          <p>User Rating</p>
        </div>
        <div className="stat-card">
          <div
            style={{
              display: "flex",
              gap: "2px",
            }}
          >
            <FaTrophy className="stat-icon" />
            <h3>85%</h3>
          </div>
          <p>Grade Improvement</p>
        </div>
      </section>
    </div>
  );
}
