import React from 'react'
import classes from './Subscribe.module.css'

function Subscribe() {
  return (
    <div className={classes.SubscribeContainer}>
      <div className={classes.text}>
        <h1>Subscribe to get updated from us</h1>
        <p>
        Please fill in your email. We will keep you updated on our products and services.
        </p>
      </div>
      <div>
        <form action="" className={classes.Subscribeform}>
         
          <input
            className={classes.email}
            type="email"
            placeholder="&nbsp;&nbsp;Email*"
            required
          />
         
          
          <br />
         
          <button className={classes.Subscribebtn} type="submit">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  )
}

export default Subscribe
