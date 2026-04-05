import React from "react";
import { useParams } from "react-router-dom";
import "./productDetails.css";
import productsData from "./productsData";

import ProductImages from "./productImages";
import ProductInfo from "./productInfo";
import BuyBox from "./buyBox";

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.product.find((item) => item.id === id);

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="productDetailsPage">
      <div className="productImages">
        <ProductImages product={product} />
      </div>

      <div className="productInfo">
        <ProductInfo product={product} />
      </div>

      <div className="buyBox">
        <BuyBox product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;

