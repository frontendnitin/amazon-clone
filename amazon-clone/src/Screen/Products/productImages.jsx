import React, { useState, useRef } from "react";
import "./productImages.css";

const ProductImages = ({ product }) => {
    const [mainImage, setMainImage] = useState(product.imageUrl);
    const [showZoom, setShowZoom] = useState(false);
    const [lensStyle, setLensStyle] = useState({});
    const [zoomStyle, setZoomStyle] = useState({});

    const imageRef = useRef(null);

    // ✅ FIX: always array
    const images = product.smallimageUrl
        ? product.smallimageUrl
        : [product.imageUrl];

    const changeImage = (img) => {
        setMainImage(img);
    };

    const handleMouseMove = (e) => {
        const rect = imageRef.current.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const lensSize = 120;

        let lensX = x - lensSize / 2;
        let lensY = y - lensSize / 2;

        // prevent overflow
        lensX = Math.max(0, Math.min(lensX, rect.width - lensSize));
        lensY = Math.max(0, Math.min(lensY, rect.height - lensSize));

        setLensStyle({
            left: lensX + "px",
            top: lensY + "px",
            width: lensSize + "px",
            height: lensSize + "px",
        });

        const zoomLevel = 2.5;

        setZoomStyle({
            backgroundImage: `url(${mainImage})`,
            backgroundSize: `${rect.width * zoomLevel}px ${rect.height * zoomLevel}px`,
            backgroundPosition: `-${lensX * zoomLevel}px -${lensY * zoomLevel}px`,
        });
    };

    return (
        <div className="productImages">
            {/* Small Images */}
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

            {/* Main Image */}
            <div
                className="bigImage"
                onMouseEnter={() => setShowZoom(true)}
                onMouseLeave={() => setShowZoom(false)}
                onMouseMove={handleMouseMove}
            >
                <img src={mainImage} ref={imageRef} alt="product" />

                {showZoom && <div className="lens" style={lensStyle}></div>}
            </div>

            {/* Zoom Preview */}
            {showZoom && <div className="zoomPreview" style={zoomStyle}></div>}
        </div>
    );
};

export default ProductImages;
