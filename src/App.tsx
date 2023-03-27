import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Home from "./Components/Home";
import Login from "./Components/LoginRegister/Login";
import LoginRegister from "./Components/LoginRegister/LoginRegister";
import Register from "./Components/LoginRegister/Register";

// import Banner from "./Components/Banners/Banner";
// import Blog from "./Components/Blog/Blog";
// import Categories from "./Components/Categories/Categories";
// import CustomerFeedback from "./Components/CustomerFeedback/CustomerFeedback";
// import Footer from "./Components/Footer/Footer";
// import Header from "./Components/Header/Header";
// import Learn from "./Components/Learn/Learn";
// import Nutritions from "./Components/Nutrition/Nutritions";
// import Offers from "./Components/Offers/Offers";
// import Services from "./Components/Offers/SingleOffer";
// import Slider from "./Components/Slider";

function App() {
  return (
    <>
      {/* <Header />
      <Slider />
      <Offers />
      <Nutritions/>
      <Categories />
      <Banner />
      <Blog/>
      <Learn/>
      <CustomerFeedback/>
      <Footer /> */}
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/food" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
