import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import faqImage from "../assets/faq.jpg";
import "../styles/xpPart6.css"; // <-- Windows XP theme styles

const Part6 = () => {
  return (
    <div className="xp-faq-container container py-5">
      <h2 className="xp-heading text-center mb-5">
        Frequently Asked Questions
      </h2>

      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
          <img src={faqImage} alt="FAQ" className="xp-faq-image img-fluid" />
        </div>

        {/* Right Accordion */}
        <div className="col-md-6">
          <div className="accordion xp-accordion" id="faqAccordion">
            {[
              {
                q: "How do I submit a complaint?",
                a: "You can submit a complaint through our online form available on the homepage.",
              },
              {
                q: "How long does it take to resolve a complaint?",
                a: "It typically takes 3–5 business days depending on the issue type.",
              },
              {
                q: "Can I track my complaint status?",
                a: "Yes, you can log in to your dashboard to check the real-time status.",
              },
              {
                q: "How do I contact support?",
                a: "You can contact us through the “Help & Support” section on the homepage.",
              },
            ].map((item, i) => (
              <div className="accordion-item xp-accordion-item" key={i}>
                <h2 className="accordion-header" id={`heading${i}`}>
                  <button
                    className={`accordion-button xp-accordion-button ${
                      i !== 0 ? "collapsed" : ""
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${i}`}
                    aria-expanded={i === 0 ? "true" : "false"}
                    aria-controls={`collapse${i}`}
                  >
                    {item.q}
                  </button>
                </h2>
                <div
                  id={`collapse${i}`}
                  className={`accordion-collapse collapse ${
                    i === 0 ? "show" : ""
                  }`}
                  aria-labelledby={`heading${i}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body xp-accordion-body">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part6;
