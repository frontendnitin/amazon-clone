import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar/navbar";
import HomeScreen from "./Screen/HomeScreen/homeScreen";
import Footer from "./Component/Footer/Footer"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HomeScreen />
      <Footer/>
    </div>
  );
};

export default App;
