import React from "react";
import "./HorizontalProductScroll.css";
import ScrollRow from "../Scroll/ScrollRow";
// const HorizontalProductScroll = ({ title, products, seeMoreText }) => {
//   return (
//     <section className="  horizontal-section">
//       <div className="section-heading">
//         <div className="section-title">{title}</div>
//         <div className="see-more">{seeMoreText}</div>
//       </div>

//       <div className="product-scroll">
//         <ScrollRow>
//           {products.map((img, index) => (
//             <div className="product-card" key={index}>
//               <img src={img} alt="product" />
//             </div>
//           ))}
//         </ScrollRow>
//       </div>
//     </section>
//   );
// };

const HorizontalProductScroll = ({ title, products, seeMoreText, variant }) => {
  return (
    <section className={`horizontal-section ${variant ? variant : ""}`}>
      <div className="section-heading">
        <div className="section-title">{title}</div>
        <div className="see-more">{seeMoreText}</div>
      </div>

      <div className="product-scroll">
        <ScrollRow>
          {products.map((img, index) => (
            <div className="product-card" key={index}>
              <img src={img} alt="product" />
            </div>
          ))}
        </ScrollRow>
      </div>
    </section>
  );
};

export default HorizontalProductScroll;
