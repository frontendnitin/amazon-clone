import React, { useState } from 'react'
import "./featureSection.css"
const FeatureCard = ({title,bigImage,bigText,smallImages}) => {
  const[mainImg, setMainImg]=useState(bigImage);
  const[mainText, setMainText]=useState(bigText);
  const[activeIndex, setActiveIndex]=useState("null");
  const [price, setPrice] = useState(smallImages[0].price);
  const [mrp, setMrp] = useState(smallImages[0].mrp);
  return (
    <div className='featureCard'>
      <h2 className='featureTitle'>{title}</h2>
      <img src={mainImg} alt={mainText} className='featureBigImg'/>
      <p className='featureText'>{mainText}</p>

      <div className="priceSection">
        <span className="price">₹{price}</span>
        <span className="mrp">₹{mrp}</span>
      </div>

      <div className='featureSmallImgDiv'>
        {smallImages.map((img,i)=>(
          <img
            key={i}
            src={img.url}
            alt={img.text}
            className={`featureSmallImg ${activeIndex === i ? "active" :"" }`}   
            onClick={()=>{
              setMainImg(img.url);
              setMainText(img.text);
              setActiveIndex(i);
              setPrice(img.price);
              setMrp(img.mrp);
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default FeatureCard
