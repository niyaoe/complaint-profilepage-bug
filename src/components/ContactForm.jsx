import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/contact.css"; // 👈 Windows XP theme

const ContactForm = () => {
  return (
    <div className="xp-bg" style={{ minHeight: "100vh" ,marginTop:"40px" }}>
      <div className="container py-5">
        <div className="row xp-card p-4 rounded">

          {/* Left Section - Contact Form */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h6 className="xp-subtext">Contact us</h6>
            <h3 className="fw-bold mb-4 xp-heading">
              Write a Message
            </h3>

            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control xp-input"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control xp-input"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control xp-input"
                  rows="4"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn w-100 py-2 fw-semibold xp-btn">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Section - Google Map */}
          <div className="col-md-6">
            <div className="xp-map-wrapper">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019514213394!2d-122.419415484681!3d37.774929779759845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a2f14a0b%3A0x2f0f7a1f0f08e6a7!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1635891952000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  borderRadius: "8px",
                  minHeight: "350px",
                }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;
