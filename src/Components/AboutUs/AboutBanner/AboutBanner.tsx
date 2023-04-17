import React from "react";
// import Aboutbanner1 from "/assets/AboutBanner/aboutbanner.png";
import classes from "./AboutBanner.module.css";
import { useNavigate } from "react-router-dom";

function AboutBanner() {
  const navigate = useNavigate();
  function Navfunc() {
    navigate("/filter");
  }
  return (
    <>
      <div
        className={classes.background}
        style={{
          backgroundImage: 'url("/assets/AboutBanner/aboutbanner.png")',
        }}
      >
        <h4 className={classes.boldText}>
          Thai Awesome Crafted by Heart, Loved by your pets
        </h4>
        <p className={classes.text}>
          Providing higest quality and natural source ingredients food to ensure
          your pet's lifelong health and well-being
        </p>
        <button
          type="button"
          onClick={Navfunc}
          className={classes.productButton}
        >
          PRODUCT
        </button>
      </div>
    </>
  );
}

export default AboutBanner;
