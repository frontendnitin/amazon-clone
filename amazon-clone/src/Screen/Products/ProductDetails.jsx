import React from "react";
import { useParams } from "react-router-dom";
import "./productDetails.css";
// import productsData from "./productsData";

import ProductImages from "./productImages";
import ProductInfo from "./productInfo";
import BuyBox from "./buyBox";
import { useState } from "react";
import { useEffect } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setproduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("/data/products.json");
        const data = await res.json();

        const foundProduct = data.product.find((item) => item.id === id);
        setproduct(foundProduct);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [id]);

  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }

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
