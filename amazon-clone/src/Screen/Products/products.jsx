import React from "react";
import "./products.css";
import { useEffect, useState } from "react";
import RatingStars from "../../Component/RatingStars/RatingStars";
import { addToCart } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify/unstyled";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/data/products.json");
        const data = await res.json();
        setProducts(data.product);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);


  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFilterOpen]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    toast.success("Added in Cart", { position: "bottom-right" });
    dispatch(addToCart(item));
    setTimeout(() => {
      navigate("/cart");
    }, 200);
  };

  // Reusable sidebar content — used in both desktop sidebar & mobile drawer
  const SidebarContent = () => (
    <>
      <div className="productsPageMainCategoryTitle">Category</div>
      <div className="productsPageMainLeftCategoryContent">
        <div className="productsPageMainLeftCategoryTitleContent">
          Electronics
        </div>
        {[
          "Macbooks", 
          "Amazon Prime",
          "Portable Media Players",
          "Home Audio",
          "Video",
          "Mobiles & Accessories",
          "Tablets",
          "Warranties",
          "eBook Readers & Accessories",
          "Wearable Technology",
          "General Purpose Batteries & Battery Chargers",
          "Headphones, Earbuds & Accessories",
          "Power Accessories",
          "Accessories",
          "Cameras & Photography",
          "Car & Vehicle Electronics",
          "Computers & Accessories",
          "GPS & Accessories",
          "Home Audio",
          "Home Theater, TV & Video",
        ].map((sub, index) => (
          <div className="productsPageMainLeftCategoryContentSub" key={`${sub}-${index}`}>
            {sub}
          </div>
        ))}
      </div>

      <div className="ratingSection">
        <div className="ratingTitle">Customer Review</div>
        <RatingStars rating={4} showUp />
        <RatingStars rating={3} showUp />
        <RatingStars rating={2} showUp />
        <RatingStars rating={1} showUp />
      </div>

      <div className="filterSection">
        <div className="filterTitle">Price</div>
        {[
          "Under ₹1,000",
          "₹1,000 - ₹5,000",
          "₹5,000 - ₹10,000",
          "Over ₹10,000",
        ].map((label) => (
          <label className="checkboxItem" key={label}>
            <input type="checkbox" /> {label}
          </label>
        ))}
      </div>
    </>
  );

  return (
    <div className="productPage">
      {/* ── Top Category Banner ── */}
      <div className="productTopBanner">
        <div className="productTopBannerItems">Electronics</div>
        {[
          "Mobiles & Accessories",
          "Laptops & Accessories",
          "TV & Home Entertainment",
          "Audio",
          "Cameras",
          "Computer Peripherals",
          "Smart Technology",
          "Musical Instruments",
          "Office & Stationary",
        ].map((label) => (
          <div className="productTopBannerItemsSubMenu" key={label}>
            {label}
          </div>
        ))}
      </div>

      {/* ── Mobile: Sticky Filter / Sort Bar ── */}
      <div className="mobileFilterBar">
        <button
          className="mobileFilterBtn"
          onClick={() => setIsFilterOpen(true)}
        >
          <span className="mobileFilterIcon">&#9776;</span> Filter
        </button>
        <div className="mobileFilterDivider" />
        <button className="mobileFilterBtn">
          <span className="mobileFilterIcon">&#8645;</span> Sort
        </button>
      </div>

      {/* ── Mobile: Filter Drawer Overlay ── */}
      {isFilterOpen && (
        <div
          className="filterOverlay"
          onClick={() => setIsFilterOpen(false)}
        />
      )}
      <div className={`filterDrawer ${isFilterOpen ? "filterDrawerOpen" : ""}`}>
        <div className="filterDrawerHeader">
          <span className="filterDrawerTitle">Filter</span>
          <button
            className="filterDrawerClose"
            onClick={() => setIsFilterOpen(false)}
          >
            ✕
          </button>
        </div>
        <div className="filterDrawerBody">
          <SidebarContent />
        </div>
        <div className="filterDrawerFooter">
          <button
            className="filterApplyBtn"
            onClick={() => setIsFilterOpen(false)}
          >
            Apply Filters
          </button>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="productsPageMain">
        {/* Desktop Sidebar */}
        <div className="productsPageMainLeftCategory">
          <SidebarContent />
        </div>

        {/* Product Grid */}
        <div className="productsPageMainRight">
          <div className="productsPageMainRightTopBanner">
            1-{products.length} of results for{" "}
            <span className="productsPageMainRightTopBannerSpan">Macbooks</span>
          </div>

          <div className="itemsImageProductPage">
            {products.map((item) => (
              <div
                className="itemsImageProductPageOne"
                key={item.id}
                onClick={() => navigate(`/product/${item.id}`)}
              >
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
                  <div className="priceWrapper">
                    <span className="itemProductcurrency">₹</span>
                    <span className="itemProductnewPrice">
                      {item.newprice.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <span className="oldPrice">
                    M.R.P: ₹{item.oldprice.toLocaleString("en-IN")}
                  </span>
                  <button
                    className="AddtoCartText"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(item);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="offProductPage">
                  Upto 10% off on select cards
                </div>
                <div className="freeDeliveryProduct">
                  Free Delivery on select cards
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Products;
