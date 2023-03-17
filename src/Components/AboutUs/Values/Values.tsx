import React from "react";
import SingleValue from "./SingleValue";
import { faLightbulb, faHandshake, faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Values.module.css";

function Values() {
  return (
    <div className={classes.Values}>
      <h4>Our Value</h4>
    <div className={classes.singleValue}>
      <SingleValue
        icon={<FontAwesomeIcon icon={faLightbulb as IconProp} />}
        title="Innovative"
        description="We focus on creating new products and formula for quality improvement and consumer experience."
      />
      <SingleValue
        icon={<FontAwesomeIcon icon={faHandshake as IconProp} />}
        title="Sustainable"
        description="Our strategy is aimed to commit for social, environment, and economic responsibility."
      />
      <SingleValue
        icon={<FontAwesomeIcon icon={faEarthAsia as IconProp} />}
        title="Trustworthy"
        description="We commit to deliver products that meet global standard and the best service to customers ."
      />
    </div>
    </div>
  );
}

export default Values;
