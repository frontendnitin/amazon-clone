import React from "react";
import sponsoredData from "./sponsoredProductData";
import "./sponsoredSection.css";
// import { FaCheckCircle } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { MdInfo } from "react-icons/md";

import RatingStars from "../../../Component/RatingStars/RatingStars";
const SponsoredSection = () => {
  const { product } = sponsoredData;
  return (
    <div className="sponsoredSection">
      <div className="sponsoredWrapper">
        <div className="sponsoredCard">
          <div className="sponsoredImg">
            <img src={product.img} alt={product.name} />
          </div>
          <div className="sponsoredDetails">
            <div className="sponsoredTitle">{product.name}</div>
            <div className="sponsoredRating">
              <RatingStars
                rating={product.rating}
                count={product.globalrating}
              />
            </div>
            <div className="priceRow">
              <div className="newPrice">
                <span className="currency">₹</span>
                <span className="amount">{product.price}</span>
                <span className="fraction">00</span>
              </div>
              <span className="oldPrice">₹{product.oldPrice}</span>
              {product.isPrime && (
                <span className="primeBadge">
                  <MdDone className="primeIcon" />
                  <span className="primeText">prime</span>
                </span>
              )}
            </div>
            <button className="shopBtn">Shop now</button>
          </div>
        </div>
        <div className="sponsoredText">Sponsored <MdInfo className="i-logo"/></div>
      </div>
    </div>
  );
};

export default SponsoredSection;


