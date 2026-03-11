import React from "react";
import "./HomeGridProductSection.css";
const HomeGridProductSection = ({ cards }) => {
  return (
    <div className="homeGridRow">
      {cards.map((card, i) => (
        <div className="homeGridCard" key={i}>
          <h2 className="homeGridTitle">{card.title}</h2>
          <div className="homeGridItems">
            {Array.isArray(card.img) &&
              card.img.map((item, i) => (
                <div
                  className={`homeGridItem ${
                    item.name || item.price ? "withText" : "noText"
                  }`}
                  key={i}
                >
                  <div className="imgWrap">
                    <img src={item.url} alt={item.name || "product"} />
                  </div>
                  {item.name && <p className="itemName">{item.name}</p>}
                  {item.price && (
                    <span className="price">
                      <span className="currency">₹</span>
                      <span className="amount">{item.price}</span>
                      <span className="fraction">00</span>
                    </span>
                  )}
                </div>
              ))}
          </div>
          <div className="seemore-text">See more</div>
        </div>
      ))}
    </div>
  );
};

export default HomeGridProductSection;
