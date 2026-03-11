import React from "react";
import "./cart.css";
import { MdOutlineDone } from "react-icons/md";
const Cart = () => {
  return (
    <div className="Cart">
      <div className="topLeftCart">
        <div className="topLeftCartTitle">Shopping Cart</div>
        <div className="deselectItems">Deselect all Items</div>
        <div className="cartPriceTextDivider">Price</div>

        <div className="cartItemsDiv">
          <div className="cartItemBlock">
            <div className="cartItemLeftBlock">
              <div className="productCheackbox">
                <input type="checkbox" className="cartProductCheck" />
              </div>
              <div className="cartItemLeftBlockImage">
                <img
                  src="https://m.media-amazon.com/images/I/710ZcpHUpkL._AC_UL480_FMwebp_QL65_.jpg"
                  className="cartItemLeftBlockImg"
                />
              </div>
              <div className="cartItemLeftBlockDetails">
                <div className="cartItemProductName">
                  HP Victus Gaming Laptop, 12th Gen Intel Core i7-12650H, 4GB
                  RTX 3050 GPU, 15.6-inch (39.6 cm), FHD, IPS, 144Hz, 16GB DDR4,
                  512GB SSD, Backlit KB, B&O, Dual Speakers (MSO, Silver, 2.29
                  kg), fa1411TX
                </div>
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
                <div className="removeFromCart">Remove </div>
              </div>
            </div>

            <div className="cartItemRightBlock">
              <div className="cartProductPrice">
                <span className="currency">₹</span>
                <span className="amount">{500}</span>
                <span className="fraction">00</span>
              </div>
            </div>
          </div>

          <div className="cartItemBlock">
            <div className="cartItemLeftBlock">
              <div className="productCheackbox">
                <input type="checkbox" className="cartProductCheck" />
              </div>
              <div className="cartItemLeftBlockImage">
                <img
                  src="https://m.media-amazon.com/images/I/71v2jVh6nIL._AC_UY327_FMwebp_QL65_.jpg"
                  className="cartItemLeftBlockImg"
                />
              </div>
              <div className="cartItemLeftBlockDetails">
                <div className="cartItemProductName">
                  Apple iPhone 15 (128 GB) - Pink
                </div>
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
                <div className="removeFromCart">Remove </div>
              </div>
            </div>

            <div className="cartItemRightBlock">
              <div className="cartProductPrice">
                <span className="currency">₹</span>
                <span className="amount">{500}</span>
                <span className="fraction">00</span>
              </div>
            </div>
          </div>

          <div className="cartItemBlock">
            <div className="cartItemLeftBlock">
              <div className="productCheackbox">
                <input type="checkbox" className="cartProductCheck" />
              </div>
              <div className="cartItemLeftBlockImage">
                <img
                  src="https://m.media-amazon.com/images/I/31NnmYempPL._AC_SR480,440_.jpg"
                  className="cartItemLeftBlockImg"
                />
              </div>
              <div className="cartItemLeftBlockDetails">
                <div className="cartItemProductName">
                  JBL C100SI Wired In Ear Headphones With Mic, Pure Bass Sound,
                  One Button Multi-Function Remote, Premium Metallic Finish,
                  Angled Buds For Comfort Fit (Black)
                </div>
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
                <div className="removeFromCart">Remove </div>
              </div>
            </div>

            <div className="cartItemRightBlock">
              <div className="cartProductPrice">
                <span className="currency">₹</span>
                <span className="amount">{500}</span>
                <span className="fraction">00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="topRightCart">
        <div className="subTotalTitle">
          Subtotal ({2} items) :{" "}
          <span className="subTotalTitleSpan">₹{45000}</span>
        </div>
        <div className="giftAddto">
          <input type="checkbox" className="cartProductCheck" />
          <span className="giftText">This order contains a gift</span>
        </div>
        <div className="proceedToBuy">Proceed to Buy</div>
      </div>
    </div>
  );
};

export default Cart;

