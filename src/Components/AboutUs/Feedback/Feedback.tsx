import React from 'react'
import classes from './Feedback.module.css'

function Feedback() {
  return (
    <div className={classes.feedbackContainer}>
      <div className={classes.text}>
        <p>Once ordered, your products will be home-delivered as per the order details.</p>
        <p>We also offer our services globally.</p>
        <p>Write us for feedback or suggestion</p>
      </div>
      <div>
        <form action="" className={classes.feedbackform}>
            <input className={classes.Name}  type='text' placeholder='&nbsp;&nbsp;Name'/>
            <input className={classes.PhoneNumber} type='text' placeholder='&nbsp;&nbsp;Phone number'/><br />
            <input className={classes.Email} type='email' placeholder='&nbsp;&nbsp;Email*' required/><br />
            <textarea className={classes.Comment} placeholder='&nbsp;&nbsp;Comment' name="" id="" cols={30} rows={5}/><br />
            <button className={classes.feedbackbtn} type='submit'>SEND</button>
        </form>
      </div>
    </div>
  )
}

export default Feedback
