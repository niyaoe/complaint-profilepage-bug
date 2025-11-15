import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "../assets/moon-7631484_1920.png";
import "../styles/xpHero.css"; // <-- XP themed external CSS

const Part1 = () => {
  const sectionStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    position: "relative",
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
  };

  return (
    <section style={sectionStyle} className="xp-hero">
      <div style={overlayStyle} className="xp-overlay">
        <div className="container">
          <h1 className="xp-hero-title fw-bold display-4 mb-3">
            Shape the Future of Your City
          </h1>

          <p className="xp-hero-subtitle lead mb-4">
            Report issues, share ideas, and track progress in your community.
          </p>

          <button className="xp-btn-green btn-lg px-4">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Part1;
