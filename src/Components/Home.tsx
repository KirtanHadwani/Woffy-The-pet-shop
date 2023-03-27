import React, { useEffect } from 'react'
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
import { ToastContainer, toast } from "react-toastify";

function Home() {

  // useEffect (()=>{
  //   toast.success(():any=>{"Login Successful" {
  //     position: toast.POSITION.TOP_RIGHT,
  // }})
  // },[])


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
