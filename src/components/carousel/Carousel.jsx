import React from "react";

const Carousel = ({ title, images }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3 col-xl-3">
      <h2 className="projects-title">{title}</h2>
      <div className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={image.src}
                  className="d-block w-100"
                  alt={image.alt}
                />
              </a>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#carouselExampleControls-${title}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#carouselExampleControls-${title}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
