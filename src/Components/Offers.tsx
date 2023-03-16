import React from "react";
import SingleOffer from "./SingleOffer";
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Offers() {
  return (
    <div>
      <SingleOffer
        icon={<FontAwesomeIcon icon={faTruckFast as IconProp} />}
        title="Free Shipping"
        description="On all prepaid order above
Rs. 599"
      />
      <SingleOffer
        icon={<FontAwesomeIcon icon={faTruckFast as IconProp} />}
        title="Speedy Deliveries"
        description="OnParcel dispatched within
24 hours"
      />
      <SingleOffer
        icon={<FontAwesomeIcon icon={faTruckFast as IconProp} />}
        title="Chat With Us"
        description="Talk with us everyday,
10am to 8pm"
      />
      <SingleOffer
        icon={<FontAwesomeIcon icon={faTruckFast as IconProp} />}
        title="Amazing values"
        description="Competitive pricing on the 
best products"
      />
    </div>
  );
}

export default Offers;
