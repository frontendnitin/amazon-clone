import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar/navbar";
import HomeScreen from "./Screen/HomeScreen/homeScreen";
import Footer from "./Component/Footer/Footer"
import {Routes,Route} from 'react-router-dom';
import Cart from "./Screen/Cart/cart";
import Products from "./Screen/Products/products"; 
import ProductDetails from "./Screen/Products/ProductDetails";
import ScrollToTop from "./ScrollToTop";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/products" element={<Products/>} />  
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
