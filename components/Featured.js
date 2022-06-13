import React from "react";

const Featured = () => {
  return (
    <div className="featured-section">
      <div className="container mx-auto section">
        <h2 className="main-title">Featured Universities</h2>
        <div className="university-wrapper">
          <div className="university-card">
            <div className="university-card-image">
              <img
                src="/assets/images/universities/swansea.png"
                alt=""
                className="university-logo"
              />
            </div>
            <div className="university-card-image">
              <img
                src="/assets/images/universities/brunel.png"
                alt=""
                className="university-logo"
              />
            </div>
            <div className="university-card-image">
              <img
                src="/assets/images/universities/lmu.png"
                alt=""
                className="university-logo"
              />
            </div>
            <div className="university-card-image">
              <img
                src="/assets/images/universities/marys.svg"
                alt=""
                className="university-logo"
              />
            </div>
            <div className="university-card-image">
              <img
                src="/assets/images/universities/northumbria.png"
                alt=""
                className="university-logo"
              />
            </div>
            <div className="university-card-image">
              <img
                src="/assets/images/universities/roehampton.png"
                alt=""
                className="university-logo"
              />
            </div>
            <div className="university-card-image">
              <img
                src="/assets/images/universities/uwl.svg"
                alt=""
                className="university-logo"
              />
            </div>
            <div className="university-card-image">
              <img
                src="/assets/images/universities/greenwich.png"
                alt=""
                className="university-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
