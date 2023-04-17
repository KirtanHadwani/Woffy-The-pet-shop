import React, { useState } from "react";
// import facebook from '/assets/socialMedia/facebook.png'
// import Instagram from '/assets/socialMedia/instagram.png'
// import Linkdin from '/assets/socialMedia/linkedin.png'
// import Twitter from '/assets/socialMedia/twitter 1.png'
import classes from "./Footer.module.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState<string>("");
  const [emailErr, setEmailErr] = useState<string>();
  const navigate = useNavigate();
  const submitHandler = async (event: any) => {
    let userRegister = {
      
      email: email,
    
    };
    let response = await fetch("https://woofy-db.onrender.com/register", {
      // credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(userRegister),
    });

    const res = await response.json();
    console.log(res);

    if (response.status === 200) {
      console.log("successfully registered");
      toast.success("Registered Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/Login?message=Register%20Success");
    } else {
      console.log("invalid credentials!");
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    
  }
  function emailHandler(e: any) {
    if (e.target.value === "") {
      setEmailErr("cant be null");
    } else if (
      !e.target.value.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      setEmailErr("Email not valid");
    } else {
      setEmailErr("");
      setEmail(e.target.value);
    }
  }
  return (
    <div className={classes.footer}>
      <div className={classes.searchedLinks}>
        <span>Parents also searched:</span> Dog Food | Dry Dog Food | Cat Food |
        Wet Cat Food | Woffy Treats | Royal Canin | Woffy Deals | Royal Canin
        Dog Food | Pedigree Food | Whiskas | Cat Litter & Accessories | Cat Toys
        | Natural Treats | Fun Toys | New Products | Personalized Tags | Dog
        Collars & Leashes | Cat Harnesses | Sheba Cat Food | Hay | Vitamins &
        Supplements{" "}
      </div>
      <div className={classes.otherlinks}>
        <div className={classes.socialmedia}>
          <h4>Follow us</h4>
          <span><img src='/assets/socialMedia/facebook.png' alt="facebook" /></span>
          <span><img src='/assets/socialMedia/instagram.png' alt="Instagram" /></span>
          <span><img src='/assets/socialMedia/twitter 1.png' alt="Twitter" /></span>
          <span><img src='/assets/socialMedia/linkedin.png' alt="Linkdin" /></span>
        </div>
        <div className={classes.onlineShopping1}>
          <h4>Online Shopping</h4>
          <span>
            <a href="">Terms of Use</a>
          </span>
          <span>
            <a href="">Privacy Policy</a>
          </span>
          <span>
            <a href="">Return Policy</a>
          </span>
          <span>
            <a href="">Shipping Policy</a>
          </span>
          <span>
            <a href="">FAQs</a>
          </span>
          <span>
            <a href="">Return Centre</a>
          </span>
          <span>
            <a href="http://localhost:3000/contactus">Contact Us</a>
          </span>
        </div>
        <div className={classes.about}>
          <div className={classes.woffyDifference}>
            <h4>The Woffy Difference</h4>
            <span>
              <a href="http://localhost:3000/aboutus">About Us</a>
            </span>
            <span>
              <a href="">Articles</a>
            </span>
            <span>
              <a href="">Giving Back</a>
            </span>
          </div>
          <div className={classes.Community}>
            <h4>Our community</h4>
            <span>
              <a href="">Community</a>
            </span>
            <span>
              <a href="">Blogs</a>
            </span>
            <span>
              <a href="">Career</a>
            </span>
          </div>
        </div>
        <div className={classes.onlineShopping2}>
          <h4>Online Shopping</h4>
          <span>
            <a href="http://localhost:3000/food">Food</a>
          </span>
          <span>
            <a href="">Clothing</a>
          </span>
          <span>
            <a href="">Accessories</a>
          </span>
          <span>
            <a href="">Vaccine</a>
          </span>
          <span>
            <a href="">Treat & Toys</a>
          </span>
          <span>
            <a href="">Pet Essentials</a>
          </span>
          <span>
            <a href="">Health</a>
          </span>
        </div>
        <div className={classes.signup}>
          <h4>Sign Up</h4>
          <p>
            For us it’s all about the love the Pets! Subscribe to our Newsletter
            & receive special promotion and fun events.
          </p>
          <form  onSubmit={submitHandler}>
          <ToastContainer autoClose={2000} />
            <input type="email" placeholder="Email Address" onChange={emailHandler}/>
            {/* <p className="errorMsg">{emailErr}</p> */}
            <button type="submit">Sign up</button>
          </form>
        </div>
      </div>
      <div className={classes.footerEnd}>
        <span>Price is in Indian rupees and excludes GST</span>
        <span>&copy; 2023 Woffy Stores Private Limited. All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
