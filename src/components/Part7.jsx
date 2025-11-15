import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "../assets/de3d9679c08de43adcf5ed9817fbb23530145f12.jpg";
import "../styles/xpPart7.css"; // <-- Windows XP stylesheet

const Part7 = () => {
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
    <section style={sectionStyle} className="xp-hero7">
      <div style={overlayStyle} className="xp-overlay7">
        <div className="container">
          <h2 className="display-4 mb-3 xp-title7">
            Observe, Organize, <br /> and Report Problems
          </h2>

          <button className="xp-btn7 btn-lg rounded-pill px-4">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Part7;
