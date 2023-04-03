import React from 'react'
import classes from './Slider.module.css'
import { Carousel } from 'react-bootstrap'
// import poster1 from "/assets/Slider/Poster1.png"
// import poster2 from "/assets/Slider/Poster2.png"
// import poster3 from "/assets/Slider/Poster3.png"
// import poster4 from "/assets/Slider/Poster4.png"

function Slider() {
  return (
    <div className={classes.imageSlider}>
       <div className="form-container imgdiv">
        <div className="image-hold">
          <Carousel className={classes.imgset}>
            <Carousel.Item>
              <img
                className="d-block w-0  "
                src="/assets/Slider/Poster1.png"
                alt="First slide"
              />
            
            </Carousel.Item>
            <Carousel.Item>
              <img 
                className="d-block w-0 "
                src="/assets/Slider/Poster2.png"
                alt="First slide"
              />
              
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-0"
                src="/assets/Slider/Poster3.png"
                alt="Second slide"
              />

           
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-0"
                src="/assets/Slider/Poster4.png"
                alt="Third slide"
              />

             
            </Carousel.Item>
          </Carousel>
         
        </div>
    </div>
    </div>
  )
}

export default Slider
