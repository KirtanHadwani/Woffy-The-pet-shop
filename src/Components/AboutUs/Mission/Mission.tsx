import React from "react";
import SingleMission from "./SingleMission";
import {
    faCartPlus,
    faFan,
    faPuzzlePiece
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Mission.module.css";

function Mission() {
  return (
    <div className={classes.Mission}>
      <h4 className={classes.missionHeading}>Mission</h4>
      <div className={classes.missionContainer}>
        <SingleMission
          icon={<FontAwesomeIcon icon={faCartPlus as IconProp} />}
          digit="1."
          description="We commit to deliver the best quality
          products and services to our
          consumers and customers."
        />
        <SingleMission
          icon={<FontAwesomeIcon icon={faFan as IconProp} />}
          digit="2."
          description="As our core value, we act responsibly
          to our environment and societies
          including taking every step for
          sustainability."
        />
        <SingleMission
          icon={<FontAwesomeIcon icon={faPuzzlePiece as IconProp} />}
          digit="3."
          description="We develop knowledge and ability
          to bring innovation to ensure the
          well being of your pet's health."
        />
      </div>
    </div>
  );
}

export default Mission;
