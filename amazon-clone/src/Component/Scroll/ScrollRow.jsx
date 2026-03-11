import React, { useEffect, useRef, useState } from "react";
import "./scrollRow.css";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ScrollRow = ({ children }) => {
  const scrollRef = useRef(null);

  const [LeftFade, setLeftFade] = useState(true);
  const [RightFade, setRightFade] = useState(false);
  const [hovered, setHovered] = useState(false);

  const updateFade = () => {
    const row = scrollRef.current;
    if (!row) return;

    const maxScroll = row.scrollWidth - row.clientWidth;
    setLeftFade(row.scrollLeft <= 5);
    setRightFade(row.scrollLeft >= maxScroll - 5);
  };

  useEffect(() => {
    const row = scrollRef.current;
    if (!row) return;

    row.addEventListener("scroll", updateFade);
    updateFade();
    return () => row.removeEventListener("scroll", updateFade);
  }, []);
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div
      className="scrollWrapper"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        className="leftArrow arrowBtn"
        onClick={scrollLeft}
        style={{ opacity: hovered ? (LeftFade ? 0.75 : 1) : 0 }}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#111"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 20 9 12 15 4" />
        </svg>
      </button>

      <div className="scrollRow" ref={scrollRef}>
        {children}
      </div>

      <button
        className="rightArrow arrowBtn"
        onClick={scrollRight}
        style={{ opacity: hovered ? (RightFade ? 0.75 : 1) : 0 }}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#111"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 4 15 12 9 20" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollRow;
