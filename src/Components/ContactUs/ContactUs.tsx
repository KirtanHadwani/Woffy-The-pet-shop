import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ContactUsForm from './ContactUsForm/ContactUsForm'
import Department from './Department/Department'
import Location from './Location/Location'
import Subscribe from './Subscribe/Subscribe'

function ContactUs() {
  return (
    <div>
     <Header/>
     <ContactUsForm/>
     <Department/>
     <Location/>
     <Subscribe/>
     <Footer/>
    </div>
  )
}

export default ContactUs
