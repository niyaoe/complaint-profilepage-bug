import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/xpPart4.css"; // <-- Windows XP CSS file

const Part4 = () => {
  return (
    <section className="xp-part4 my-5 py-4 position-relative">
      
      {/* Section Title */}
      <div className="xp-part4-title-wrapper">
        <h1 className="xp-part4-title fw-bold text-uppercase">
          Featured Reports
        </h1>
      </div>

      {/* Map Frame */}
      <div className="ratio ratio-16x9 position-relative xp-map-container4">
        <div className="xp-map-frame4 p-3 mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654.388678188561!2d75.87681027702168!3d11.21741142684473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65adcab75e271%3A0x8e26a01cb98e56b3!2sPonnempadam%20Kalasamithi!5e0!3m2!1sen!2sin!4v1722529510184!5m2!1sen!2sin"
            className="xp-map4"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Part4;
