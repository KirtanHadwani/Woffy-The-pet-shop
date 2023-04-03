import React from "react";
// import Food from '/assets/Top Categories/Food.png'
// import Treat from '/assets/Top Categories/Treat.png'
// import supplements from '/assets/Top Categories/supplements.png'
// import clothing from '/assets/Top Categories/clothing.png'
// import Accessories from '/assets/Top Categories/Accessories.png'
// import Beds from '/assets/Top Categories/Beds.png'
// import toys from '/assets/Top Categories/toys.png'
// import gromming from '/assets/Top Categories/gromming.png'
// import vaccine from '/assets/Top Categories/vaccine.png'
// import Bones from '/assets/Top Categories/Bones.png'
// import WinterClothes from '/assets/Top Categories/WinterClothes.png'
// import vegFood from '/assets/Top Categories/vegFood.png'
import classes from './Categories.module.css'
import SingleCategory from '../Categories/SingleCategory'
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className={classes.Categories}>
      <h3 className={classes.CategoryTitle}>Top Categories Searched</h3>
      <div className={classes.CategoryContainer1}>
      <Link to={"/Filter"}>  <SingleCategory  image='/assets/Top Categories/Food.png' title="Dogs Food"/></Link>
        <SingleCategory image='/assets/Top Categories/Treat.png' title="Treats"/>
        <SingleCategory image= '/assets/Top Categories/supplements.png' title="Supplements"/>
        <SingleCategory image='/assets/Top Categories/clothing.png' title="Clothing"/>
        <SingleCategory image='/assets/Top Categories/Accessories.png' title="Accessories"/>
        <SingleCategory image='/assets/Top Categories/Beds.png' title="Beds"/>
        </div>
        <div className={classes.CategoryContainer2}>
        <SingleCategory image='/assets/Top Categories/toys.png' title="Toys"/>
        <SingleCategory image='/assets/Top Categories/gromming.png' title="Groomming"/>
        <SingleCategory image='/assets/Top Categories/vaccine.png' title="Vaccine"/>
        <SingleCategory image='/assets/Top Categories/Bones.png' title="Bones"/>
        <SingleCategory image='/assets/Top Categories/WinterClothes.png' title="WinterClothes"/>
        <SingleCategory image='/assets/Top Categories/vegFood.png' title="Vegetarian Food"/>
      </div>
    </div>
  );
};

export default Categories;