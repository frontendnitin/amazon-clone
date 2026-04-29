import React, { useState } from "react";
import "./buyBox.css";
import { MdDone } from "react-icons/md";
import { addToCart } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const BuyBox = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = () => {
    console.log(product)
    dispatch(addToCart(product, quantity))
    setTimeout(() => {
      navigate("/cart");
    }, 200);
  }


  return (
    <div className="buyBoxContainer">
      <div className="productNewPrice">
        <span className="itemProductcurrency">₹</span>
        <span className="itemProductnewPrice">
          {product.newprice.toLocaleString("en-IN")}
        </span>
      </div>

      <span className="primeBadge">
        <MdDone className="primeIcon" />
        <span className="primeText">prime</span>
      </span>

      <div className="taxText">Inclusive of all taxes</div>

      {/* Delivery */}
      <div className="deliverySection">
        FREE delivery <b>Monday, 18 March</b>
        <div className="deliverAddress">Deliver to Nitin - 110084</div>
      </div>

      {/* Stock */}
      <div className="stockText">In Stock</div>

      {/* seller info */}
      <div className="sellerInfo">
        <div className="infoRow">
          <span className="infoLabel">Ships from</span>
          <span className="infoValue">Amazon</span>
        </div>

        <div className="infoRow">
          <span className="infoLabel">Sold by</span>
          <span className="infoValue sellerName">{product.seller}</span>
        </div>

        <div className="infoRow">
          <span className="infoLabel">Gift options</span>
          <span className="infoValue">Available at checkout</span>
        </div>

        <div className="infoRow">
          <span className="infoLabel">Payment</span>
          <span className="infoValue">Secure transaction</span>
        </div>
      </div>

      <div className="quantityWrapper">
        <div className="quantityContainer" onClick={() => setOpen(!open)}>
          <span>Quantity: {quantity}</span>
          <span>▼</span>
        </div>

        {open && (
          <div className="quantityDropdown">
            {Array.from({ length: 25 }, (_, i) => i + 1).map((q) => (
              <div
                key={q}
                className="quantityOption"
                onClick={() => {
                  setQuantity(q);
                  setOpen(false);
                }}
              >
                {q}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="buyButtons">
        <button className="addCartBtn" onClick={handleAddToCart}>Add to Cart</button>
        <button className="buyNowBtn">Buy Now</button>
      </div>
    </div>
  );
};

export default BuyBox;
