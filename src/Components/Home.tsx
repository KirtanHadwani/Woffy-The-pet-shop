import React from 'react'
import Banner from "./Banners/Banner";
import Blog from "./Blog/Blog";
import Categories from "./Categories/Categories";
import CustomerFeedback from "./CustomerFeedback/CustomerFeedback";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Learn from "./Learn/Learn";
import Nutritions from "./Nutrition/Nutritions";
import Offers from "./Offers/Offers";
import Services from "./Offers/SingleOffer";
import Slider from "./Slider";

function Home() {
  return (
    <div>
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
    </div>
  )
}

export default Home
