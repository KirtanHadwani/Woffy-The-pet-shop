import React from "react";
import classes from "./Location.module.css";
// import Location1 from "/assets/ContactUs/Location.png";

function Location() {
  return (
    <div className={classes.Container}>
      <div className={classes.LeftContainer}>
        <div className={classes.title}>Office</div>
        <div className={classes.description}>
          108/126 chatraganga, marwadi road, opp. kurla railway station, West
          Kurla, Mumbai, Maharashtra, India.
        </div>
        <div className={classes.imageleft}>
          <a href="https://www.google.com/maps/place/TechnoMark+Solutions/@23.002155,72.4992525,17z/data=!4m14!1m7!3m6!1s0x395e9be2baf9060f:0xccc2a5b288a63518!2sTechnoMark+Solutions!8m2!3d23.0021501!4d72.5014412!16s%2Fg%2F11t7fdpymx!3m5!1s0x395e9be2baf9060f:0xccc2a5b288a63518!8m2!3d23.0021501!4d72.5014412!16s%2Fg%2F11t7fdpymx">
            
            <img src="/assets/ContactUs/Location.png" alt="Location Img" />
          </a>
        </div>
      </div>
      <div className={classes.RightContainer}>
        <div className={classes.title}>Factory</div>
        <div className={classes.description}>
          18, Factory Road, Sarjinagar Nagar Area, Vishramnagar, New Delhi,
          India
        </div>
        <div className={classes.imageright}>
        <a href="https://www.google.com/maps/place/TechnoMark+Solutions/@23.002155,72.4992525,17z/data=!4m14!1m7!3m6!1s0x395e9be2baf9060f:0xccc2a5b288a63518!2sTechnoMark+Solutions!8m2!3d23.0021501!4d72.5014412!16s%2Fg%2F11t7fdpymx!3m5!1s0x395e9be2baf9060f:0xccc2a5b288a63518!8m2!3d23.0021501!4d72.5014412!16s%2Fg%2F11t7fdpymx">
            
            <img src="/assets/ContactUs/Location.png" alt="Location Img" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Location;
