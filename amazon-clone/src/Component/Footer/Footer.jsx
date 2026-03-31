import React from "react";
import "./footer.css";
import amazonLogo from "../../assets/amazonLogo.png";
import indiaFlag from "../../assets/india.png"
import { Link } from "react-router-dom";
const Footer = () => {
  const backToTopHandler = () => {
    window.scrollTo({ top: 0});
  };

  return (
    <footer className="footer">
      {/* Back to top */}
      <div className="footer-top" onClick={backToTopHandler}>
        Back to top
      </div>


      <div className="footer-links">
        <div className="footer-links-inner">
          <div className="footer-column">
            <h4>Get to Know Us</h4>
            <p>About Amazon</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Amazon Science</p>
          </div>

          <div className="footer-column">
            <h4>Connect with Us</h4>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>

          <div className="footer-column">
            <h4>Make Money with Us</h4>
            <p>Sell on Amazon</p>
            <p>Sell under Amazon Accelerator</p>
            <p>Protect and Build Your Brand</p>
            <p>Amazon Global Selling</p>
          </div>

          <div className="footer-column">
            <h4>Let Us Help You</h4>
            <p>COVID-19 and Amazon</p>
            <p>Your Account</p>
            <p>Returns Centre</p>
            <p>Help</p>
          </div>
        </div>
      </div>


      <div className="footer-brand">
        <Link to={'/'} className="amazonlogo-Fotter" >
        <img src={amazonLogo} alt="Amazon" className="footer-logo" />
        </Link>
        <div className="footer-selectors">
          {/* Language box */}
          <div className="footer-box">
            🌐 <span>English</span>
          </div>

          {/* Country box */}
          <div className="footer-box">
            <img src={indiaFlag} alt="India" className="footer-flag" />
            <span>India</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Conditions of Use & Sale &nbsp; | &nbsp; Privacy Notice &nbsp; |
          &nbsp; Interest-Based Ads
        </p>
        <p>© 1996–2026, Amazon.com, Inc. or its affiliates</p>
      </div>

    </footer>
  );
};

export default Footer;

