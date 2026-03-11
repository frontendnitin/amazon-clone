import React, { useRef } from "react";
import videoData from "./videoScrollData.json";
import "./videoScrollSection.css";
import ScrollRow from "../../../Component/Scroll/ScrollRow"; // adjust path if needed

const VideoScrollSection = () => {
  return (
    <div className="videoScrollMain">
      {videoData.map((item, index) => (
        <div className="videoScrollSection" key={index}>
          <div className="videoScrollHeading">
            <div className="videoScrollTitle">{item.title}</div>
            <div className="videoscollSeeMore">{item.seeMore}</div>
          </div>

          <div className="videoScrollContent">
            {/* Video container */}
            <div className="videoContainer">
              <VideoPlayer src={item.videoSrc} poster={item.poster} />
            </div>

            {/* Images */}
            <ScrollRow>
              {item.products.map((details, i) => (
                <div className="productCard" key={i}>
                  <div className="imgWrapper">
                    <img
                      src={details.src}
                      className="scrollImg"
                      alt={details.name}
                    />
                  </div>
                  <div className="productdetails">{details.name}</div>
                  <div className="offer">
                    <span className="discount">{details.discount}</span>
                    <span className="deal">{details.deal}</span>
                  </div>
                  <div className="productPrice">
                    <span className="newPrice">{details.price}</span>
                    <span className="oldPrice">{details.oldprice}</span>
                  </div>
                </div>
              ))}
            </ScrollRow>
          </div>
        </div>
      ))}
    </div>
  );
};

const VideoPlayer = ({ src, poster }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => videoRef.current.play();
  const handleMouseLeave = () => videoRef.current.pause();

  return (
    <div className="scrollContainer">
      {/* <span className="liveBadge">LIVE</span> */}
      <video
        ref={videoRef}
        className="hoverVideo"
        src={src}
        poster={poster}
        muted
        autoPlay
        controls
        loop
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default VideoScrollSection;
