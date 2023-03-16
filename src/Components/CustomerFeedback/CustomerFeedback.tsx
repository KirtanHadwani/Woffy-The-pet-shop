import React from "react";
import SingleCustomerFeedback from "./SingleCustomerFeedback";
import classes from "./CustomerFeedback.module.css";

const CustomerFeedback = () => {
  return (
    <>
      <div className={classes.Customer}>
        <h3 className={classes.CustomerHeading}>Customer Feedback</h3>
        <div className={classes.CustomerContainer}>
          <SingleCustomerFeedback
            description="This was one of the best experiences I have ever had with a cab company. I had problems at the airport and the driver stayed with me for over an hour and helped me sort everything out. I would recommend this company to anyone. Thank you for such fabulous service!"
            
          />
          <SingleCustomerFeedback
            description="This was one of the best experiences I have ever had with a cab company. I had problems at the airport and the driver stayed with me for over an hour and helped me sort everything out. I would recommend this company to anyone. Thank you for such fabulous service!"
            
          />
          <SingleCustomerFeedback
            description="This was one of the best experiences I have ever had with a cab company. I had problems at the airport and the driver stayed with me for over an hour and helped me sort everything out. I would recommend this company to anyone. Thank you for such fabulous service!"
       
          />
        </div>
        {/* <div className={classes.seemore}>See more &gt;&gt;</div> */}
      </div>
    </>
  );
};

export default CustomerFeedback;
