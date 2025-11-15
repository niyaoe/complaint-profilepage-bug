import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/footerXP.css"; // ⬅️ external XP theme stylesheet

function Footer() {
  return (
    <footer className="xp-footer">
      <div className="container py-4 xp-footer-container">
        <div className="row">

          <div className="col-md-4 mb-3 align-content-center xp-footer-title-box">
            <h5 className="fw-bold xp-footer-title">Its Our Planet</h5>
          </div>

          <div className="col-6 col-md-2 mb-3 xp-footer-section">
            <h6 className="fw-bold xp-footer-heading">Quick Links</h6>
            <ul className="list-unstyled xp-footer-list">
              <li><a href="#" className="xp-footer-link">Home</a></li>
              <li><a href="#" className="xp-footer-link">About Us</a></li>
              <li><a href="#" className="xp-footer-link">Services</a></li>
              <li><a href="#" className="xp-footer-link">Contact</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3 xp-footer-section">
            <h6 className="fw-bold xp-footer-heading">Support</h6>
            <ul className="list-unstyled xp-footer-list">
              <li><a href="#" className="xp-footer-link">Help Center</a></li>
              <li><a href="#" className="xp-footer-link">FAQs</a></li>
              <li><a href="#" className="xp-footer-link">Terms of Service</a></li>
              <li><a href="#" className="xp-footer-link">Privacy Policy</a></li>
            </ul>
          </div>

          <hr className="xp-footer-divider" />

          <p className="small mt-3 xp-footer-copy">
            &copy; 2025 Its Our Planet. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
