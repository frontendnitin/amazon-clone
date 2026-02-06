import "./homeBanner.css";
import homeBannerItemProduct from "../../../homeProduct.json";
import banner1 from "../../../assets/homeBannerimg1.jpg";
import banner2 from "../../../assets/homeBannerimg2.jpg";
import banner3 from "../../../assets/homeBannerimg3.jpg";
import banner4 from "../../../assets/homeBannerimg4.jpg";
import banner5 from "../../../assets/homeBannerimg5.jpg";
import { useState, useEffect } from "react";

const images = [banner1, banner2, banner3, banner4, banner5];

const HomeBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [enableTransition, setEnableTransition] = useState(true);

  // Slides with clones
  const slides = [images[images.length - 1], ...images, images[0]]; 

  const nextSlide = () => setCurrentIndex((prev) => prev + 1);
  const prevSlide = () => setCurrentIndex((prev) => prev - 1);

  const handleTransitionEnd = () => {
    // reached last clone
    if (currentIndex === slides.length - 1) {  
      setEnableTransition(false);
      setCurrentIndex(1);
    }

    // reached first clone
    if (currentIndex === 0) {
      setEnableTransition(false);
      setCurrentIndex(slides.length - 2);
    }
  };

  // Re-enable transition after instant jump
  useEffect(() => {
    if (!enableTransition) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    }
  }, [enableTransition]);

  return (
    <div className="homeBanner">
      <div className="bannerSlider">
        <div
          className="bannerTrack"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: enableTransition
              ? "transform 0.3s ease-in-out"
              : "none",
          }}
        >
          {slides.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`banner-${index}`}
              className="bannerImage"
            />
          ))}
        </div>

        <button className="bannerArrow left" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="bannerArrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="homeBanneritemDiv">
        {homeBannerItemProduct.map((item, index) => (
          <div className="homeBanneritemDivCard" key={index}>
            <div className="homeBanneritemDivCardTitle">{item.itemTitle}</div>

            {item.imgs[0].type === "big" ? (
              <div className="bigImgContainer">
                <img
                  className="bigimg"
                  src={item.imgs[0].url}
                  alt={item.itemTitle}
                />
                <div className="bigImgName">{item.imgs[0].name}</div>
              </div>
            ) : (
              <div className="imghomeBanneritemDivCard">
                {item.imgs.map((img, imgIndex) => (
                  <div className="imgBannerhomeDiv" key={imgIndex}>
                    <img
                      className="imgBannerDivimg"
                      src={img.url}
                      alt={img.name}
                    />
                    <div className="imgBannerimgName">{img.name}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="homeBanneritemDivCardText">See all deals</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
