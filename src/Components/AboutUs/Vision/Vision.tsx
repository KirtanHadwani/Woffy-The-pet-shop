import React from "react";
import classes from './Vision.module.css'
// import vision from "../../../assets/AboutBanner/visionDogImage.png";

const Vision = () => {
  return (
    <div className={classes.visionContainer}>
      <img src='/assets/AboutBanner/visionDogImage.png' alt="Dog Image" />
      <div>
        <h4>Vision</h4>
        <p>
          Our vision is to be recognized by international standards as world
          class premium innovation pet food producer and exporter with
          responsibility to society, communities and environment.
        </p>
      </div>
    </div>
  );
};

export default Vision;
