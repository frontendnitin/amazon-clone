import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar/navbar";
import HomeScreen from "./Screen/HomeScreen/homeScreen";
import Footer from "./Component/Footer/Footer"
import {Routes,Route} from 'react-router-dom';
import Cart from "./Screen/Cart/cart";
import Products from "./Screen/Products/products"; 
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />

      </Routes>
      {/* <Footer/> */}
    </div>
  );
};

export default App;
