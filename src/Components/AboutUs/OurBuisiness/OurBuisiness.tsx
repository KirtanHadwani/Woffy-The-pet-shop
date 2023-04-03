import React from "react";
import classes from "./OurBuisiness.module.css";
// import OurBuisinessDog from "/assets/AboutBanner/OurBuisinessDog.png";

const OurBuisiness = () => {
  return (
    <div className={classes.OurBuisinessContainer}>
     
      <div>
        <h4>About Our Buisiness</h4>
        <p>
          Woffy Private Limited is fully Indian-owned private company with its
          registered capital of 1 billion. Since we have started business, we
          continuously grow each year. Our factory is located in Pune district
          of Maharashtra, India, in the area of 156,800 square meters with more
          than 600 employees. Our automatic machinery has manufacturing capacity
          of 25,000 tones per year. Our brand is sold to both domestic and
          international markets by the most of products are exported to Middle
          East, Africa and Asia. The export value is over 60% of our total
          revenue.
        </p>
      </div>
      <img src='/assets/AboutBanner/OurBuisinessDog.png' alt="Dog Image" />
    </div>
  );
};

export default OurBuisiness;
