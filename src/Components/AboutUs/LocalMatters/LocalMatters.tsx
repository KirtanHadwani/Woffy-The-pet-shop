import React from "react";
import classes from "./LocalMatters.module.css";
import LocalMattersimg from "../../../assets/AboutBanner/LocalMatters.png";

function LocalMatters() {
  return (
    <div className={classes.LocalMattersContainer}>
      <h4>Local Matters</h4>

      <div>
        <div className={classes.paraUpper}>
          <div>
            <p>
              We believe in supporting our local community. For us, it is about
              nurturing local businesses so that we can grow together, and in
              turn provide the best products and services to enrich the lives of
              pets. <br />
              <br /> <br /> That is why at Woffy, a large proportion of our products
              are sourced from independent curators based in India. We made
              products in India and have all the manufacturing units in the
              India base only. Also we have all the products certified and
              licenses from the respected agencies and other government bodies.
              <br /><br />
              <br /> Our food product is all certified from FSSAI, our products
              like harness and pet belt are also certified from the ISI unit of
              government safety bodies. We use original brand to make our
              products and the procedure of the products are mandatory to be
              very proper and made with all safety and security. Our Packing
              products are being done in India and are totally done by the
              machinery based packings. We are proud of our country and would
              like to be the part of Made in India forum.
            </p>
          </div>
        </div>
        <img
          className={classes.LocalMattersImg}
          src={LocalMattersimg}
          alt="LocalMatters Image"
        />
      </div>
    </div>
  );
}

export default LocalMatters;
