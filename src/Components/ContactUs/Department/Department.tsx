import React from "react";
import SingleDepartment from "./SingleDepartment";
import {
  faLightbulb,
  faHandshake,
  faEarthAsia,
  faPhoneVolume
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Department.module.css";

function Department() {
  return (
    <div className={classes.Departments}>
      <div className={classes.SingleDepartment}>
        <SingleDepartment
          icon={<FontAwesomeIcon icon={faPhoneVolume as IconProp} />}
          title="Marketing 
        Department"
          description="marketing@woffypetshop.com"
          number="+21 (0) 2821 5545/46/47/48"
        />
        <SingleDepartment
          icon={<FontAwesomeIcon icon={faPhoneVolume as IconProp} />}
          title="Brand Sales 
        Department"
          description="sales@woffypetshop.com"
          number="+21 (0) 2821 5545/46/47/48"
        />
        <SingleDepartment
          icon={<FontAwesomeIcon icon={faPhoneVolume as IconProp} />}
          title="Management
        Department"
          description="management@woffypetshop.com"
          number="+21 (0) 2821 5545/46/47/48"
        />
      </div>
    </div>
  );
}

export default Department;
