import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import firstpic from "../assets/892bb47b41348ca52be8a8bd9367aa9d5906b098.jpg";
import secpic from "../assets/9cddfc7bd00a86586ea8785645146c4fe82a4828.png";
import "../styles/xpPart3.css"; // <-- XP theme CSS

const Part3 = () => {
  return (
    <div className="container py-5 xp-part3-wrapper">
      <div className="xp-grain-overlay"></div>

      <div className="row align-items-center text-center text-md-start position-relative xp-z">
        
        {/* Left Side Images */}
        <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
          <div className="position-relative xp-img-box">
            <img src={firstpic} alt="background" className="xp-main-img" />
            <img src={secpic} alt="overlay" className="xp-overlay-img" />
          </div>
        </div>

        {/* Right Side Text Section */}
        <div className="col-12 col-md-6 xp-paper-box">
          <div className="xp-paper-fold"></div>

          <h2 className="xp-part3-title">Why Use Voiceful?</h2>

          {[
            "Location-based reporting",
            "Quick updates from the city",
            "Transparency in progress",
          ].map((text, i) => (
            <div key={i} className="xp-list-item">
              <span className="xp-check">✔</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Part3;
