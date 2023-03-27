import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import AboutBanner from './AboutBanner/AboutBanner'
import Feedback from './Feedback/Feedback'
import Founders from './Founders/Founders'
import LocalMatters from './LocalMatters/LocalMatters'
import Mission from './Mission/Mission'
import OurBuisiness from './OurBuisiness/OurBuisiness'
import Values from './Values/Values'
import Vision from './Vision/Vision'

function AboutUs() {
  return (
    <div>
      <Header/>
      <AboutBanner/>
      <Values/>
      <Vision />
      <Mission/>
      <OurBuisiness/>
      <Founders/>
      <LocalMatters/>
      <Feedback/>
      <Footer/>
    </div>
  )
}

export default AboutUs
