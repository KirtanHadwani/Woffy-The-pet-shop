import React from 'react'
import Header from '../Header/Header'
import AboutBanner from './AboutBanner/AboutBanner'
import Mission from './Mission/Mission'
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
    </div>
  )
}

export default AboutUs
