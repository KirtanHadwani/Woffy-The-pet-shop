import React from "react";

import "./App.css";
import Banner from "./Components/Banners/Banner";
import Blog from "./Components/Blog/Blog";
import Categories from "./Components/Categories/Categories";
import CustomerFeedback from "./Components/CustomerFeedback/CustomerFeedback";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Learn from "./Components/Learn/Learn";
import Nutritions from "./Components/Nutrition/Nutritions";
import Offers from "./Components/Offers/Offers";
import Services from "./Components/Offers/SingleOffer";
import Slider from "./Components/Slider";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Offers />
      <Nutritions/>
      <Categories />
      <Banner />
      <Blog/>
      <Learn/>
      <CustomerFeedback/>
      <Footer />
    </>
  );
}

export default App;
