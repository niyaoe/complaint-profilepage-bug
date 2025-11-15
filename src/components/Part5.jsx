import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import transport from "../assets/transport.png";
import lighting from "../assets/light.png";
import waste from "../assets/waste.png";
import bgimage from "../assets/part2bg.jpg";

const Part5 = () => {
  return (
    <section
      className="py-5 text-center retro-section"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="fw-bold text-success mb-4 retro-heading">
        Categories
      </h2>

      <div
        id="categoryCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="row justify-content-center">
              {[transport, lighting, waste].map((img, i) => (
                <div
                  key={i}
                  className={`col-12 col-md-4 mb-4 ${
                    i > 0 ? "d-none d-md-block" : ""
                  }`}
                >
                  <div className="card retro-card mx-auto" style={{ width: "18rem" }}>
                    <img
                      src={img}
                      className="card-img-top corosal-image"
                      alt="Category"
                    />
                    <div className="card-body">
                      <h5 className="card-title retro-title">
                        {["Transport", "Lighting", "Waste"][i]}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="row justify-content-center">
              {[lighting, waste, transport].map((img, i) => (
                <div
                  key={i}
                  className={`col-12 col-md-4 mb-4 ${
                    i > 0 ? "d-none d-md-block" : ""
                  }`}
                >
                  <div className="card retro-card mx-auto" style={{ width: "18rem" }}>
                    <img
                      src={img}
                      className="card-img-top corosal-image"
                      alt="Category"
                    />
                    <div className="card-body">
                      <h5 className="card-title retro-title">
                        {["Lighting", "Waste", "Transport"][i]}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#categoryCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon retro-control" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#categoryCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon retro-control" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Part5;
