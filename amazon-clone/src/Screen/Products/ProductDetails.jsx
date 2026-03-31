import React from "react";
import "./productDetails.css"
import { useParams } from "react-router-dom";
import productData from "./productsData";

const ProductDetails = () => {
  const { id } = useParams();

  const product = productData.product.find(
    (item) => item.id ===(id)
  );

  return (
    <div className="productDetailsPage">
      <div className="productDetailsLeft">
        <img src={product.imageUrl} alt={product.name} />
      </div>

      <div className="productDetailsCenter">
        <h2>{product.name}</h2>

        <div className="price">
          ₹{product.newprice}
        </div>

        <p className="offer">
          Upto 10% off on select cards
        </p>

        <ul className="aboutItem">
          <li>Non-Returnable</li>
          <li>Pay on Delivery</li>
          <li>Amazon Delivered</li>
          <li>Top Brand</li>
          <li>Free Delivery</li>
          <li>Secure transaction</li>
        </ul>
      </div>

      <div className="productDetailsRight">
        <button>Add to Cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetails;