import React from "react";
import classes from "./ContactUsForm.module.css";

function ContactUsForm() {
  return (
    <div className={classes.ContactUsFormContainer}>
      <div className={classes.text}>
        <h1>Contact Us</h1>
        <p>
          Contact us for any further help, feedback or any kind of suggestion
          for the organization. Also for any collaboration for sponsorship
          concern kindly mail us with detail information at
          contact@woffypetshop.com
        </p>
      </div>
      <div>
        <form action="" className={classes.ContactUsform}>
         
          <input
            className={classes.Name}
            type="text"
            placeholder="&nbsp;&nbsp;First Name"
          />
         
          <input
            className={classes.PhoneNumber}
            type="text"
            placeholder="&nbsp;&nbsp;Phone Number"
          />
          <br />
          
          <input
            className={classes.Email}
            type="email"
            placeholder="&nbsp;&nbsp;Email*"
            required
          />
          <br />
          
          <textarea
            className={classes.Comment}
            placeholder="&nbsp;&nbsp;Comment"
            name=""
            id=""
            cols={30}
            rows={5}
          />
          <br />
          {/* <input type="checkbox" className={classes.Checkbox} />
  <label >  Save my name, email, and website in this browser for the next time I comment.</label> */}
          <button className={classes.contactusbtn} type="submit">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUsForm;
