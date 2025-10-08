import "./choose.css"

import {
  FaBookOpen,
  FaGamepad,
  FaGift,
  FaBolt,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";

export default function WhyChooseSection() {
  const features = [
    {
      icon: <FaBookOpen />,
      title: "Extensive Study Materials",
      desc: "Access notes, assignments, previous year papers, and more for all subjects and branches",
      color: "#a855f7",
    },
    {
      icon: <FaGamepad />,
      title: "Gamified Learning",
      desc: "Earn points, unlock badges, and climb the leaderboard as you study and achieve your goals",
      color: "#3b82f6",
    },
    {
      icon: <FaGift />,
      title: "Referral Rewards",
      desc: "Invite friends and earn bonus money. Use up to 25% bonus on any purchase - just like gaming apps",
      color: "#22c55e",
    },
    {
      icon: <FaBolt />,
      title: "Instant Access",
      desc: "Download materials instantly after purchase. Study anytime, anywhere, even offline",
      color: "#facc15",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure & Protected",
      desc: "All materials are protected with watermarks. Your purchases are safe and secure",
      color: "#ef4444",
    },
    {
      icon: <FaStar />,
      title: "Premium Quality",
      desc: "Curated by top students and verified by experts. Only the best materials make it to NoteSpace",
      color: "#6366f1",
    },
  ];

  return (
    <div className="why-choose-container" id="benefits">
      <h2 className="section-title">Why Choose NoteSpace?</h2>
      <p className="section-subtitle">
        Everything you need to excel in your studies
      </p>

      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div
              className="feature-icon"
              style={{ backgroundColor: item.color + "20", color: item.color }}
            >
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
