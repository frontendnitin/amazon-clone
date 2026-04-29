import React, { useState, useEffect } from "react";
import "./cart.css";
import { MdOutlineDone } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartQuantity,
} from "../../redux/actions/actions";
import { toast, ToastContainer } from "react-toastify/unstyled";
import "react-toastify/dist/ReactToastify.css";
import { clearCart } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.items || []);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const cost = cartItems.reduce(
    (total, item) => (total = total + item.newprice * item.quantity),
    0,
  );

  const increaseQuantity = (item) => {
    dispatch(updateCartQuantity(item.id, item.quantity + 1));
  };

  const dicreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(updateCartQuantity(item.id, item.quantity - 1));
    } else {
      dispatch(removeFromCart(item.id));
    }
  };

  const handleRemoveFromCart = (id) => {
    toast.error("Item Removed From Cart", {
      position: "bottom-right",
    });
    dispatch(removeFromCart(id));
  };

  const handleEmptyCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="Cart">
      <div className="topLeftCart">
        <div className="topLeftCartTitle">Shopping Cart</div>
        <div
          className="deselectItems"
          onClick={() => {
            handleEmptyCart();
          }}
        >
          Deselect all Items
        </div>
        <div className="cartPriceTextDivider">Price</div>

        <div className="cartItemsDiv">
          {cartItems.map((item) => {
            console.log(item);
            return (
              <div className="cartItemBlock" key={item.id}>
                <div className="cartItemLeftBlock">
                  <div className="productCheackbox">
                    <input type="checkbox" className="cartProductCheck" />
                  </div>
                  <div className="cartItemLeftBlockImage">
                    <img
                      src={item.imageUrl}
                      className="cartItemLeftBlockImg"
                      onClick={() => navigate(`/product/${item.id}`)}
                    />
                  </div>
                  <div className="cartItemLeftBlockDetails">
                    <div className="cartItemProductName">{item.name}</div>
                    <div className="inStock">In Stock</div>
                    <span className="primeBadge">
                      <MdOutlineDone className="primeIcon" />
                      <span className="primeText">prime</span>
                    </span>
                    <div className="elgFreeShp">
                      FREE delivery{" "}
                      <span className="deliveryDate">Wed, 11 Mar</span>
                    </div>
                    <div className="productGiftDetail">
                      <input type="checkbox" className="cartProductCheck" />
                      <div className="giftTextDetail">
                        <span className="GiftText">This will be a gift </span>
                        <span className="learnMoreText">Learn more</span>
                      </div>
                    </div>
                    <div className="cartItemActions">
                      <div className="quantityBox">
                        {item.quantity === 1 ? (
                          <button
                            className="qtyBtn"
                            onClick={() => handleRemoveFromCart(item.id)}
                          >
                            <FiTrash2 />
                          </button>
                        ) : (
                          <button
                            className="qtyBtn"
                            onClick={() => dicreaseQuantity(item)}
                          >
                            -
                          </button>
                        )}
                        <span className="qtyValue">{item.quantity}</span>
                        <button
                          className="qtyBtn"
                          onClick={() => increaseQuantity(item)}
                        >
                          +
                        </button>
                      </div>
                      <div className="cartItemsActionstOptions">
                        <span onClick={() => handleRemoveFromCart(item.id)}>
                          Delete
                        </span>
                        <span>|</span>
                        <span>Save for later</span>
                        <span>|</span>
                        <span>See more like this</span>
                        <span>|</span>
                        <span>Share</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cartItemRightBlock">
                  <div className="cartProductPrice">
                    <span className="currency">₹</span>
                    <span className="amount">
                      {item.newprice.toLocaleString("en-IN")}
                    </span>
                    <span className="fraction">00</span>
                  </div>
                  <div className="cardOffer">
                    Up to 5% back with Amazon Pay ICICI card{" "}
                    <span className="terms">Terms</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="topRightCart">
        <div className="subTotalTitle">
          Subtotal ({totalItems} items) :{" "}
          <span className="subTotalTitleSpan">
            ₹{cost.toLocaleString("en-IN")}
          </span>
        </div>
        <div className="giftAddto">
          <input type="checkbox" className="cartProductCheck" />
          <span className="giftText">This order contains a gift</span>
        </div>
        <div className="proceedToBuy">Proceed to Buy</div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
