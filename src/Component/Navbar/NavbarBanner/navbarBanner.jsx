import React from "react";
import "./navbarBanner.css";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
const NavbarBanner = () => {
  const Options = [
    { name: "Fresh" },
    { name: "MX Player" },
    { name: "Sell" },
    { name: "Best Sellers" },
    { name: "Today's Deals" },
    { name: "Mobiles" },
    { name: "Prime" },
    { name: "Customer Service" },
    { name: "Fashion" },
    { name: "New Releases" },
    { name: "Amazon Pay" },
    { name: "Electronics" },
    { name: "Home & Kitchen" },
    { name: "Computer" },
  ];

  return (
    <div className="navbarBanner">
      <div className="navbarBannerOptions hover">
        <MenuIcon sx={{ fontSize: "24px" }} />
        <div className="navbarBannerOptionsAll ">All</div>
      </div>

      {Options.map((item, ind) => {
        const hasDropdown = item.name === "Fresh" || item.name === "Prime";
        return (
          <Link to={'/products'} className="navbarBannerOptions" key={ind}>
            <div className="navbarBannerOptionsAll hoverBox">{item.name}</div>
            {hasDropdown && (
              <ArrowDropDownIcon sx={{ fontSize: "17px", marginLeft: "0px" }} />
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default NavbarBanner;

 