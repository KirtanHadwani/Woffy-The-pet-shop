import React from "react";
import Aboutbanner1 from "/home/tmdev/Desktop/project/PetShop/src/assets/AboutBanner/aboutbanner.png";
import classes from "./AboutBanner.module.css";

function AboutBanner() {
  return (
    <>
    <div
      className={classes.background}
      style={{ backgroundImage: `url(${Aboutbanner1})` }}
    >
      <h4 className={classes.boldText}>
        Thai Awesome Crafted by Heart, Loved by your pets
      </h4>
      <p className={classes.text}>
        Providing higest quality and natural source ingredients food to ensure
        your pet's lifelong health and well-being
      </p>
      <button type="button" className={classes.productButton}>
        PRODUCT
      </button>
    </div>
   
    </>
  );
}

export default AboutBanner;
