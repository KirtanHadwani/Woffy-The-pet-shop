import React from "react";
import classes from "./CustomerFeedback.module.css";
import Rating1 from "../../assets/CustomerFeedback/Ratings.png"


type Props = {
  
  description: string;
  
};

const SingleCustomerFeedback: React.FC<Props> = ({ description }) => {
  return (
    <div className={classes.CustomerCard}>
      <img src={Rating1} alt="Ratings" />
    
     
      <div className={classes.description}>{description}</div>
      
    </div>
  );
};

export default SingleCustomerFeedback;
