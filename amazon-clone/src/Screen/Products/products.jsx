import React from "react";
import "./products.css";
import productData from "./productsData";
import RatingStars from "../../Component/RatingStars/RatingStars";
import { addToCart } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { toast,ToastContainer } from "react-toastify/unstyled";
import 'react-toastify/dist/ReactToastify.css'
const Products = () => {
  const dispatch = useDispatch();
  
  const handleAddToCart =(item)=>{
    console.log(item)
    toast.success ("Added in Cart",{
      position:"bottom-right"
    })
    dispatch(addToCart(item))
  }

  return (
    <div className="productPage">
      <div className="productTopBanner">
        <div className="productTopBannerItems">Electronics</div>
        <div className="productTopBannerItemsSubMenu">
          Mobiles & Accessories
        </div>
        <div className="productTopBannerItemsSubMenu">
          Laptops & Accessories
        </div>
        <div className="productTopBannerItemsSubMenu">
          TV & Home Entertainment
        </div>
        <div className="productTopBannerItemsSubMenu">Audio</div>
        <div className="productTopBannerItemsSubMenu">Cameras</div>
        <div className="productTopBannerItemsSubMenu">Computer Peripherals</div>
        <div className="productTopBannerItemsSubMenu">Smart Technology</div>
        <div className="productTopBannerItemsSubMenu">Musical Instruments</div>
        <div className="productTopBannerItemsSubMenu">Office & Stationary</div>
      </div>

      <div className="productsPageMain">
        <div className="productsPageMainLeftCategory">
          <div className="productsPageMainCategoryTitle">Category</div>
          <div className="productsPageMainLeftCategoryContent">
            <div className="productsPageMainLeftCategoryTitleContent">
              Electronics
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Macbooks
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Amazon Prime
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Portable Media Players
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Home Audio
            </div>
            <div className="productsPageMainLeftCategoryContentSub">video</div>
            <div className="productsPageMainLeftCategoryContentSub">
              Mobiles & Accessories
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Tablets
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Warrenties
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              eBook Readers & Accessories
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Wearable Technology
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              General Purpose Batteries & Battery Chargers
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Headphones, Earbuds & Accessories
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Power Accessories
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Accessories
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Cameras & Photography
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Car & Vehicle Electronics
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Computers & Accessories
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              GPS & Accessories
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Home Audio
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Home Theater, TV & Video
            </div>
          </div>

          <div className="ratingSection">
            <div className="ratingTitle">Customer review</div>
            <RatingStars rating={4} showUp />
            <RatingStars rating={3} showUp />
            <RatingStars rating={2} showUp />
            <RatingStars rating={1} showUp />
          </div>

          <div className="filterSection">
            <div className="filterTitle">Price</div>

            <label className="checkboxItem">
              <input type="checkbox" /> Under ₹1,000
            </label>

            <label className="checkboxItem">
              <input type="checkbox" /> ₹1,000 - ₹5,000
            </label>

            <label className="checkboxItem">
              <input type="checkbox" /> ₹5,000 - ₹10,000
            </label>

            <label className="checkboxItem">
              <input type="checkbox" /> Over ₹10,000
            </label>
          </div>
        </div>

        <div className="productsPageMainRight">
          <div className="productsPageMainRightTopBanner">
            1-5 of results for{" "}
            <span className="productsPageMainRightTopBannerSpan">Macbooks</span>
          </div>

          <div className="itemsImageProductPage">
            {productData.product.map((item) => (
              <div className="itemsImageProductPageOne" key={item.id}>
                <div className="imgBlockitemsImageProductPageOne">
                  <img
                    src={item.imageUrl}
                    className="productImageProduct"
                    alt={item.name}
                  />
                </div>
                <div className="imageproductName">{item.name}</div>
                <div className="productRating">
                  <RatingStars rating={item.rating} />
                </div>
                <div className="productCartPrice">
                  <span className="itemProductcurrency">₹</span>
                  <span className="itemProductnewPrice">{item.newprice}</span>
                  <span className="oldPrice">M.R.P: ₹{item.oldprice}</span>
                  <button className="AddtoCartText" onClick={()=>{handleAddToCart(item)}}>Add to Cart</button>
                </div>
                <div className="offProductPage">Upto 10% off on select cards</div>
                <div className="freeDeliveryProduct">Free Delivery on select cards</div>

              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Products;


