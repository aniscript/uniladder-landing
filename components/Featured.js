import React from "react";

const Featured = () => {
  const logos = [
    {
      id: 1,
      imgUrl: "/assets/images/universities/swansea.png",
    },
    {
      id: 2,
      imgUrl: "/assets/images/universities/brunel.png",
    },
    {
      id: 3,
      imgUrl: "/assets/images/universities/lmu.png",
    },
    {
      id: 4,
      imgUrl: "/assets/images/universities/marys.svg",
    },
    {
      id: 5,
      imgUrl: "/assets/images/universities/northumbria.png",
    },
    {
      id: 6,
      imgUrl: "/assets/images/universities/roehampton.png",
    },
    {
      id: 7,
      imgUrl: "/assets/images/universities/uwl.svg",
    },
    {
      id: 8,
      imgUrl: "/assets/images/universities/greenwich.png",
    },
    {
      id: 9,
      imgUrl: "/assets/images/universities/ulster.png",
    },
    {
      id: 10,
      imgUrl: "/assets/images/universities/lsbu.png",
    },
    {
      id: 11,
      imgUrl: "/assets/images/universities/de-montfort-university.png",
    },
    {
      id: 12,
      imgUrl: "/assets/images/universities/canterbury.svg",
    },
    {
      id: 13,
      imgUrl: "/assets/images/universities/winchester.svg",
    },
    {
      id: 14,
      imgUrl: "/assets/images/universities/uel.svg",
    },
    {
      id: 15,
      imgUrl: "/assets/images/universities/ulaw.svg",
    },
    {
      id: 16,
      imgUrl: "/assets/images/universities/plymoth.png",
    },
    {
      id: 17,
      imgUrl: "/assets/images/universities/surrey.png",
    },
    {
      id: 18,
      imgUrl: "/assets/images/universities/coventry.webp",
    },
  ];
  return (
    <div className="featured-section">
      <div className="container mx-auto section">
        <h2 className="main-title">Featured Universities</h2>
        <div className="university-wrapper">
          <div className="university-card">
            {logos.map((logo) => (
              <div className="university-card-image">
                <img src={logo.imgUrl} alt="" className="university-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
