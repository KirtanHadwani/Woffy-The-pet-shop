import React from 'react'
import classes from './Categories.module.css'

type Props = {
    image: any;
    title: string;
}

const SingleCategory:React.FC<Props> = ({image, title}) => {
  return (
    <div className={classes.CategoryCard}>
        <img src={image} alt="image" />
        <div className={classes.categoryTitle}>{title}</div>
    </div>
  )
}

export default SingleCategory;