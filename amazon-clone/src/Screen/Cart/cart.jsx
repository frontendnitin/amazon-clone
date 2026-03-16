import React, { useState, useEffect } from "react";
import "./cart.css";
import { MdOutlineDone } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/actions";
import { toast,ToastContainer } from "react-toastify/unstyled";
import 'react-toastify/dist/ReactToastify.css'

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  let a=0
  let cost = cartItems.map((item)=>{
    return(
      a=a+item.newprice
    )
  })

  useEffect(() => {
    setCartItem(cartItems);
  }, [cartItems]);

  const handleRemoveFromCart=(id)=>{
    toast.error("Item Removed From Cart",{
      position:"bottom-right"
    })
    dispatch(removeFromCart(id)); 
  }


  return (
    <div className="Cart">
      <div className="topLeftCart">
        <div className="topLeftCartTitle">Shopping Cart</div>
        <div className="deselectItems">Deselect all Items</div>
        <div className="cartPriceTextDivider">Price</div>

        <div className="cartItemsDiv">
          {cartItems.map((item, id) => {
            console.log(item) 
            return (
              <div className="cartItemBlock">
                <div className="cartItemLeftBlock">
                  <div className="productCheackbox">
                    <input type="checkbox" className="cartProductCheck" />
                  </div>
                  <div className="cartItemLeftBlockImage">
                    <img
                      src={item.imageUrl}
                      className="cartItemLeftBlockImg"
                    />
                  </div>
                  <div className="cartItemLeftBlockDetails">
                    <div className="cartItemProductName">
                      {item.name}
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
                    <div className="removeFromCart" onClick={()=>{handleRemoveFromCart(item.id)}} >Remove </div>
                  </div>
                </div>

                <div className="cartItemRightBlock">
                  <div className="cartProductPrice">
                    <span className="currency">₹</span>
                    <span className="amount">{item.newprice}</span>
                    <span className="fraction">00</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="topRightCart">
        <div className="subTotalTitle">
          Subtotal ({cartItems.length} items) :{" "}
          <span className="subTotalTitleSpan">₹{a}</span>
        </div>
        <div className="giftAddto">
          <input type="checkbox" className="cartProductCheck" />
          <span className="giftText">This order contains a gift</span>
        </div>
        <div className="proceedToBuy">Proceed to Buy</div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Cart;
