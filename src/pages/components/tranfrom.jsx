import { FaCheckCircle } from "react-icons/fa";
import "./tranfrom.css";
export default function TransformSection() {
  const benefits = [
    {
      title: "Save Time & Money",
      desc: "No more printing notes or buying expensive books. Get everything you need in one place",
    },
    {
      title: "Study at Your Own Pace",
      desc: "Access materials 24/7 from any device. Study when and where you want",
    },
    {
      title: "Earn While You Learn",
      desc: "Invite friends, earn bonus money, and get discounts on all your purchases",
    },
    {
      title: "Track Your Progress",
      desc: "Monitor your study time, streak, and achievements. Stay motivated with gamification",
    },
    {
      title: "Join a Community",
      desc: "Connect with 10,000+ students. Compete on leaderboards and share your success",
    },
  ];

  const stats = [
    {
      label: "User Satisfaction",
      value: 98,
      color: "linear-gradient(90deg, #a855f7, #6366f1)",
    },
    {
      label: "Study Time Saved",
      value: 40,
      color: "linear-gradient(90deg, #06b6d4, #3b82f6)",
    },
    {
      label: "Grade Improvement",
      value: 85,
      color: "linear-gradient(90deg, #22c55e, #16a34a)",
    },
  ];

  return (
    <div className="transform-container">
      <h2 className="section-title">Transform Your Study Experience</h2>
      <p className="section-subtitle">
        Join thousands of students who improved their grades with NoteSpace
      </p>

      <div className="transform-grid">
        {/* Left Column - Benefits */}
        <div className="benefits-list">
          {benefits.map((item, index) => (
            <div className="benefit-item" key={index}>
              <FaCheckCircle className="benefit-icon" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Progress Stats */}
        <div className="progress-bars">
          {stats.map((stat, index) => (
            <div className="progress-card" key={index}>
              <div className="progress-header">
                <span>{stat.label}</span>
                <span className="progress-value">{stat.value}%</span>
              </div>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{
                    width: `${stat.value}%`,
                    background: stat.color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
