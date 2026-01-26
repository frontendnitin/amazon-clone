import React from "react";
import "./homeScreen.css";
import HomeBanner from "./HomeBanner/homeBanner";
// import HomeDetails from "./HomeDetails/homeDetails";
import FeatureSection from "./FeatureSection/featureSection";
import VideoScrollSection from "./VideoScrollSection/videoScrollSection";
import HorizontalProductScroll from "../../Component/HorizontalProductScroll/HorizontalProductScroll";
import data from "../../Component/HorizontalProductScroll/horizontalScrollData";
import HomeGridProductSection from "../../Component/HomeGridProductSection/HomeGridProductSection";
import homeGridProductData from "../../Component/HomeGridProductSection/HomeGridProductData";
import SponsoredSection from "./SponsoredSection/sponsoredSection";
const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <HomeBanner />
      {/* <HomeDetails /> */}
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
      <SponsoredSection/>
      <HomeGridProductSection cards={homeGridProductData} />
      <HorizontalProductScroll
        title={data.bikesDeals.title}
        products={data.bikesDeals.products}
        seeMoreText={data.bikesDeals.seeMoreText}
        variant="bike"
      />
    </div>
  );
};

export default HomeScreen;
