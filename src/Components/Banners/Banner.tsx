import React from 'react'
import Banner1 from '../../assets/Banner/image 2.png'
import classes from './Banner.module.css'

function Banner() {
  return (
    <div className={classes.banner}>
      <img src={Banner1} alt="Banner" />
    </div>
  )
}

export default Banner
