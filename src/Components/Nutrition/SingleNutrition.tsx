import React from 'react'
// import whiskas from '/assets/Nutrition/Whiskas_final 6.png'
import classes from './SingleNutrition.module.css';

type Props ={
    nutritionName: string;
}

const SingleNutrition:React.FC<Props> = ({nutritionName}) => {
  return (
    <div className={classes.singleNutrition}>
        <img src='/assets/Nutrition/Whiskas_final 6.png' alt="Whiskas Nutrition" />
        <div className={classes.nutritionTitle}>{nutritionName}</div>
    </div>
  )
}

export default SingleNutrition;