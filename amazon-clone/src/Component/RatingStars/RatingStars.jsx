import React from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";
import "./RatingStars.css";

const RatingStars = ({rating=0,max=5,count}) => {
  return (
    <div className="ratingStars">
      {Array.from({length:max}).map((_,index) =>
        index < rating ? (
          <FaStar key={index} className="ratingStar filled"/>
        ):(
          <FaRegStar key={index} className="ratingStar empty"/>
        )
      )}
      {count && <span className="ratingCount">({count})</span>}
    </div>
  )
}

export default RatingStars


