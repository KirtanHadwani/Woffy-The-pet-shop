import React from "react";
import SingleLearn from "./SingleLearn";
import classes from "./Learn.module.css";

const Learn = () => {
  return (
    <>
    <div className={classes.Learn}>
      <h3 className={classes.LearnHeading}>Learn with Woffy</h3>
      <div className={classes.LearnContainer}>
        <SingleLearn
          time="3 Minutes Read"
          description="Whilst the quality of care remains the same for senior dogs, there are additional measures we need to take to ensure they stay relaxed, comfortable, and pain-free! Read along to know more!"
          title="Improve your senior dog's life with these 6 tricks!"
        />
        <SingleLearn
          time="3 Minutes Read"
          description="Whilst the quality of care remains the same for senior dogs, there are additional measures we need to take to ensure they stay relaxed, comfortable, and pain-free! Read along to know more!"
          title="Improve your senior dog's life with these 6 tricks!"
        />
         <SingleLearn
          time="3 Minutes Read"
          description="Whilst the quality of care remains the same for senior dogs, there are additional measures we need to take to ensure they stay relaxed, comfortable, and pain-free! Read along to know more!"
          title="Improve your senior dog's life with these 6 tricks!"
        />
      </div>
      <div className={classes.seemore}>See more &gt;&gt;</div>
    </div>
    
    </>
  );
};

export default Learn;
