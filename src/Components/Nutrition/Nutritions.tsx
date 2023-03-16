import React from "react";
import SingleNutrition from "./SingleNutrition";
import classes from "./SingleNutrition.module.css";

const Nutritions = () => {
  return (
    <div className={classes.nutrition}>
      <h3>Top nutritious pick for your pet!</h3>
      <div className={classes.NutritionContainer}>
        <SingleNutrition nutritionName="Whikas" />
        <SingleNutrition nutritionName="Royal Canin" />
        <SingleNutrition nutritionName="Farmina" />
        <SingleNutrition nutritionName="Pedigree" />
        <SingleNutrition nutritionName="Drools pet Food" />
      </div>
    </div>
  );
};

export default Nutritions;
