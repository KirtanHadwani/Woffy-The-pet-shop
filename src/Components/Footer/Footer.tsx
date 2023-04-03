import React from "react";
// import facebook from '/assets/socialMedia/facebook.png'
// import Instagram from '/assets/socialMedia/instagram.png'
// import Linkdin from '/assets/socialMedia/linkedin.png'
// import Twitter from '/assets/socialMedia/twitter 1.png'
import classes from "./Footer.module.css";

const Footer = () => {
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
            <a href="">Contact Us</a>
          </span>
        </div>
        <div className={classes.about}>
          <div className={classes.woffyDifference}>
            <h4>The Woffy Difference</h4>
            <span>
              <a href="">About Us</a>
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
            <a href="">Food</a>
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
            & receive special promotion and fun events
          </p>
          <form action="">
            <input type="email" placeholder="Email Address" />
            <button>Sign up</button>
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
