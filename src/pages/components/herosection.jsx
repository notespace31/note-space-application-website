import { useEffect, useState } from "react";
import { FaUsers, FaBookOpen, FaStar, FaTrophy } from "react-icons/fa";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        background: isMobile
          ? "linear-gradient(160deg, #312e81 0%, #4338ca 100%)"
          : "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: isMobile ? "80px 20px 60px" : "120px 40px 100px",
        minHeight: "100dvh",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Glows */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          left: "-150px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.4), transparent 70%)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          right: "-150px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.4), transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* Hero Content */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: isMobile ? "95%" : "850px",
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "2.3rem" : "4rem",
            fontWeight: "800",
            lineHeight: isMobile ? "1.2" : "1.1",
            marginBottom: isMobile ? "15px" : "20px",
          }}
        >
          Study Smarter. <br />
          <span
            style={{
              background: "linear-gradient(90deg, #a78bfa, #38bdf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Achieve More.
          </span>
        </h1>

        <p
          style={{
            fontSize: isMobile ? "1rem" : "1.25rem",
            maxWidth: "650px",
            margin: "0 auto 35px",
            color: "rgba(255,255,255,0.85)",
            lineHeight: "1.6",
          }}
        >
          Join <strong>10,000+</strong> students mastering their studies with
          NoteSpace — access top notes, track your progress, and rise on the leaderboard.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <button
            style={{
              background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
              color: "white",
              fontWeight: "600",
              fontSize: isMobile ? "1rem" : "1.1rem",
              padding: isMobile ? "12px 28px" : "15px 36px",
              border: "none",
              borderRadius: "14px",
              cursor: "pointer",
              boxShadow: "0 8px 25px rgba(99,102,241,0.4)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              width: isMobile ? "100%" : "auto",
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.target.style.transform = "translateY(-4px)";
                e.target.style.boxShadow = "0 12px 35px rgba(99,102,241,0.6)";
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 8px 25px rgba(99,102,241,0.4)";
            }}
            onClick={() => (window.location.href = "#features")}
          >
            🚀 Get Started Free
          </button>

          <button
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "2px solid rgba(255,255,255,0.3)",
              color: "white",
              fontWeight: "600",
              fontSize: isMobile ? "1rem" : "1.1rem",
              padding: isMobile ? "12px 28px" : "15px 36px",
              borderRadius: "14px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              width: isMobile ? "100%" : "auto",
            }}
            onMouseEnter={(e) => {
              if (!isMobile) e.target.style.background = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(255,255,255,0.1)";
            }}
            onClick={() => (window.location.href = "#download")}
          >
            📱 Download App
          </button>
        </div>
      </section>

      {/* Stats */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
          gap: isMobile ? "15px" : "25px",
          marginTop: isMobile ? "50px" : "80px",
          width: isMobile ? "90%" : "850px",
        }}
      >
        {[
          { icon: <FaUsers />, value: "10K+", label: "Active Users" },
          { icon: <FaBookOpen />, value: "50K+", label: "Study Materials" },
          { icon: <FaStar />, value: "4.8★", label: "User Rating" },
          { icon: <FaTrophy />, value: "85%", label: "Grade Improvement" },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "16px",
              padding: isMobile ? "18px 10px" : "25px 20px",
              textAlign: "center",
              backdropFilter: "blur(8px)",
              transition: "transform 0.3s ease, background 0.3s ease",
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "6px",
                fontSize: isMobile ? "1.1rem" : "1.4rem",
                fontWeight: "700",
                marginBottom: "5px",
                color: "#a5b4fc",
              }}
            >
              {item.icon}
              <h3 style={{ fontSize: isMobile ? "1.2rem" : "1.4rem", margin: 0, color: "white" }}>
                {item.value}
              </h3>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: isMobile ? "0.8rem" : "0.95rem",
                margin: 0,
              }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
