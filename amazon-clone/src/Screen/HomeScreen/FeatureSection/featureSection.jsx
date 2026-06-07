import React, { useState, useEffect } from "react";
import "./featureSection.css";
// import data from "./featureSectionData.json";
import FeatureCard from "./featureCard";

const FeatureSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/featureSectionData.json");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

    if (!data) return <div>Loading...</div>;

  return (
    <div className="feature-section">
      {data.map((item, index) => (
        <FeatureCard
          key={index}
          title={item.title}
          bigImage={item.bigImage}
          bigText={item.bigText}
          smallImages={item.smallImages}
        />
      ))}
    </div>
  );
};

export default FeatureSection;
