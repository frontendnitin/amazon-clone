import React, { useState, useEffect } from "react";
import "./homeScreen.css";
import HomeBanner from "./HomeBanner/homeBanner";
import FeatureSection from "./FeatureSection/featureSection";
import VideoScrollSection from "./VideoScrollSection/videoScrollSection";
import HorizontalProductScroll from "../../Component/HorizontalProductScroll/HorizontalProductScroll";
import HomeGridProductSection from "../../Component/HomeGridProductSection/HomeGridProductSection";
import homeGridProductData from "../../Component/HomeGridProductSection/HomeGridProductData";
import SponsoredSection from "./SponsoredSection/sponsoredSection";

const HomeScreen = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/horizontalScrollData.json");
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
    <div className="HomeScreen">
      <HomeBanner />
      <HorizontalProductScroll
        title={data.HomeDetails1.title}
        products={data.HomeDetails1.products}
        seeMoreText={data.HomeDetails1.seeMoreText}
      />
      <HorizontalProductScroll
        title={data.HomeDetails2.title}
        products={data.HomeDetails2.products}
        seeMoreText={data.HomeDetails2.seeMoreText}
      />
      <FeatureSection />
      <VideoScrollSection />
      <HorizontalProductScroll
        title={data.firstDeals.title}
        products={data.firstDeals.products}
        seeMoreText={data.firstDeals.seeMoreText}
      />
      <SponsoredSection />
      <HomeGridProductSection cards={homeGridProductData} />
      <HorizontalProductScroll
        title={data.bikesDeals.title}
        products={data.bikesDeals.products}
        seeMoreText={data.bikesDeals.seeMoreText}
        variant="bike"
      />
      {/* <Footer/> */}
    </div>
  );
};

export default HomeScreen;
