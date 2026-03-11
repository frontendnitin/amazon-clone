import React from 'react';
import "./featureSection.css";
import data from "./featureSectionData.json";
import FeatureCard from './featureCard';
const FeatureSection = () => {
  return (
    <div className='feature-section'>
      {
        data.map((item,index)=>(
          <FeatureCard 
          key={index}
          title={item.title}
          bigImage={item.bigImage}
          bigText={item.bigText}
          smallImages={item.smallImages}
          />
        ))
      }
    </div>
  );
};

export default FeatureSection

