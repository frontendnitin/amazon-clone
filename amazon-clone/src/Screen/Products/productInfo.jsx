import React from 'react'
import "./productInfo.css"
import { MdDone } from "react-icons/md";
import RatingStars from "../../Component/RatingStars/RatingStars"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { faArrowRotateLeft, faTruckFast, faShieldHalved , faHandHoldingDollar,faTrophy, faLock } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  replace: faArrowRotateLeft,
  Delivery: faTruckFast,
  secure: faShieldHalved,
  dollar:faHandHoldingDollar ,
  brand:faTrophy,
  lock:faLock
};

const productInfo = ({ product }) => {
  return (
    <div className="productInfoPage">
      <div className="topDesc">
        <div className='product-title'>{product.name}</div>
        <span className='visit-product'>Visit the Store</span>
        <div className="productRatingRow">
          <div className="productRating">
            <div className="ratingNo">{product.ratingcount}</div>
            <RatingStars
              rating={product.rating}
              count={product.globalrating.toLocaleString("en-IN")}
            />
          </div>
          <div className="border-margin">|</div>
          <span className='pageSearch'>Search this page</span>
        </div>
      </div>
      <hr />
      <div className="centerDesc">
        <div className='priceDetails'>
          <div className="productNewPrice">
            <span className="itemProductcurrency">₹</span>
            <span className="itemProductnewPrice">{product.newprice.toLocaleString("en-IN")}</span>
          </div>
          <span className="oldPrice">M.R.P: ₹{product.oldprice.toLocaleString("en-IN")}</span>
        </div>
        <span className="primeBadge">
          <MdDone className="primeIcon"/>
          <span className="primeText">prime</span>
        </span>
        <span className='texesText'>Inclusive of all taxes</span>
        <div className="productOfferDeals">
          <div className="offerHeading">
            <FontAwesomeIcon icon={faPercent} className="offerIcon" />
            <span className='offerText'>Offers</span>
          </div>
          <ul className="offerDetails">
            {product.offer.map((offers, index) => (
              // <span className='offerList'> . {offers}</span>
              <li className='offerList' key={index}>
                <span className='offerListText'>{offers}</span>
                <span className='detailsText'>Details</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="serviceSection">
          {product.services.map((service, index) => (

            <div className="serviceDetails" key={index}>
              <FontAwesomeIcon icon={iconMap[service.icon]} className="serviceIcons" />
              <span className='service-Text'>{service.text}</span>
            </div>
          ))}
        </div>
        <hr />
        <div className="bottomDesc">
            <div className="aboutProduct">
              <h3 className='aboutTitle'>About this item</h3>
              <ul className='aboutList'>
                {product.about.map((point,index)=>(
                  <li key={index} className='aboutItem'>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default productInfo

