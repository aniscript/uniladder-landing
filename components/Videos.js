import Link from "next/link";
import React from "react";

const Videos = () => {
  const videos = [
    {
      id: 1,
      videoUrl: "https://www.youtube.com/embed/BjfSpo26UU4",
    },
    {
      id: 2,
      videoUrl: "https://www.youtube.com/embed/MZha-oIlmPs",
    },
    {
      id: 3,
      videoUrl: "https://www.youtube.com/embed/JBS-yz-9WvM",
    },
  ];
  return (
    <div className="videos-section">
      <div className="container mx-auto section">
        <h2 className="main-title">Our Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {videos.map((video) => (
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="250"
                src={video.videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-8">
          <Link href="https://www.youtube.com/c/GaneshKhadkalive">
            <a className="blob-btn" target="_blank">
              View All Videos
              <span className="blob-btn__inner">
                <span className="blob-btn__blobs">
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                </span>
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Videos;
