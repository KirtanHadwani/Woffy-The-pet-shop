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
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const message = searchParams.get("message");
    if(message == 'Login Successful' ){
      toast.success("Login Successful")
    }
  }, [location]);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const message = searchParams.get("message");
    if(message == 'Logout Successful' ){
      toast.success("Logout Successful")
    }
  }, [location]);


  return (
    <div>
      <ToastContainer autoClose={2000}/>
      
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
