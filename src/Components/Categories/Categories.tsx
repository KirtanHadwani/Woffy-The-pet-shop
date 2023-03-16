import React from "react";
import Food from '../../assets/Top Categories/Food.png'
import Treat from '../../assets/Top Categories/Treat.png'
import supplements from '../../assets/Top Categories/supplements.png'
import clothing from '../../assets/Top Categories/clothing.png'
import Accessories from '../../assets/Top Categories/Accessories.png'
import Beds from '../../assets/Top Categories/Beds.png'
import toys from '../../assets/Top Categories/toys.png'
import gromming from '../../assets/Top Categories/gromming.png'
import vaccine from '../../assets/Top Categories/vaccine.png'
import Bones from '../../assets/Top Categories/Bones.png'
import WinterClothes from '../../assets/Top Categories/WinterClothes.png'
import vegFood from '../../assets/Top Categories/vegFood.png'
import classes from './Categories.module.css'
import SingleCategory from '../Categories/SingleCategory'

const Categories = () => {
  return (
    <div className={classes.Categories}>
      <h3 className={classes.CategoryTitle}>Top Categories Searched</h3>
      <div className={classes.CategoryContainer1}>
        <SingleCategory image={Food} title="Dogs Food"/>
        <SingleCategory image={Treat} title="Treats"/>
        <SingleCategory image={supplements} title="Supplements"/>
        <SingleCategory image={clothing} title="Clothing"/>
        <SingleCategory image={Accessories} title="Accessories"/>
        <SingleCategory image={Beds} title="Beds"/>
        </div>
        <div className={classes.CategoryContainer2}>
        <SingleCategory image={toys} title="Toys"/>
        <SingleCategory image={gromming} title="Groomming"/>
        <SingleCategory image={vaccine} title="Vaccine"/>
        <SingleCategory image={Bones} title="Bones"/>
        <SingleCategory image={WinterClothes} title="WinterClothes"/>
        <SingleCategory image={vegFood} title="Vegetarian Food"/>
      </div>
    </div>
  );
};

export default Categories;