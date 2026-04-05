import React, { useState } from "react"; import "./ProductImages.css";
const ProductImages = ({ product }) => {
    const [mainImage, setMainImage] = useState(product.imageUrl)
    const images = product.smallimageUrl ? product.smallimageUrl : [product.imageUrl];
    const changeImage = (img) => {
    setMainImage(img);
  };
    return (
        <div className="productImages">
            <div className="smallImages">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt="product"
                        onMouseEnter={() => changeImage(img)}
                        onClick={() => changeImage(img)}
                    />
                ))}
            </div>
            <div className="bigImage"> <img src={mainImage} /></div>
        </div>
    )
}
export default ProductImages

