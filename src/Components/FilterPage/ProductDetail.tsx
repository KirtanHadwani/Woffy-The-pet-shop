import React, { useEffect, useState } from 'react'
import classes from './ProductDetail.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useParams } from 'react-router-dom'

function ProductDetail() {
  const [apidata, setapiData] = useState<any[]>([]);

 const apiCall = async () => {
  let response = await fetch("https://woofy-db.onrender.com/products", {
    method: "GET", 
  });
  const res = await response.json();
  setapiData(res.data);
};
console.log("mera data",apidata)

useEffect(()=>{
  apiCall();
}, [])

const parameter = useParams();
console.log(parameter.id)

  return (
    <>
    <Header/>
    <div className={classes.mainContainer}>
     <div className={classes.imgContainer}>
      <img className={classes.mainImg} src="/assets/Himalya 8.png" alt="img" />
        <div className={classes.multiImg}>
        <div className={classes.multiImg1}><img src="/assets/FilterItem/Himalaya.png" alt="img" /></div>
        <div className={classes.multiImg1}> <img src="/assets/FilterItem/Himalaya.png" alt="img" /></div>
        <div className={classes.multiImg1}> <img src="/assets/FilterItem/Himalaya.png" alt="img" /></div>
        <div className={classes.multiImg1}> <img src="/assets/FilterItem/Himalaya.png" alt="img" /></div>
        <div className={classes.multiImg1}> <img src="/assets/FilterItem/Himalaya.png" alt="img" /></div>
        <div className={classes.multiImg1}> <img src="/assets/FilterItem/Himalaya.png" alt="img" /></div>
        <div className={classes.multiImg1}> <img src="/assets/FilterItem/Himalaya.png" alt="img" /></div>
        </div>
     </div>
     <div className={classes.detailContainer}>
      <div className={classes.title}>PetSutra Himalaya Adult Dry Dog Food Meat and Rice 10kg</div>
      <div className={classes.brand}>by Himalaya</div>
      <div className={classes.ratings}><img src="/assets/CustomerFeedback/Ratings.png" alt="" /> <span>7710 Ratings</span></div>
      <div className={classes.priceContainer}><span className={classes.price}>&#8377;1,399</span><span className={classes.priceSpan}> (inclusive of all taxes)</span></div>
      <div className={classes.easypay}>Or 3 interest-free payments of ₹ 467 with easy-Pay</div><hr />
      <div className={classes.addBtn}><button>Add to Cart</button></div>
      <div className={classes.BuyBtn}><button>Buy Now</button></div><hr />
      <div className={classes.upiText}>Pay securely with</div>
      <div className={classes.upiContainer}>
        <div className={classes.upiLogo1}><img src="/assets/gpay.png" alt="gpay" /></div>
        <div className={classes.upiLogo2}><img src="/assets/visa.png" alt="visa" /></div>
        <div className={classes.upiLogo3}><img src="/assets/upi.png" alt="upi" /></div>
        <div className={classes.upiLogo4}><img src="/assets/mastercard.png" alt="mastercard" /></div>
        <div className={classes.upiLogo5}><img src="/assets/rupay.png" alt="rupay" /></div>
      </div>
     </div>
    </div>
    <Footer/>
    </>
  )
}

export default ProductDetail
