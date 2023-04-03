import React from "react";
import classes from './Filter.module.css'

type Props = {
  imagename: any;
  price: string;
  title: string;
};
const SingleProduct: React.FC<Props> = ({ imagename, price, title }) => {
  return (
   
        <div className={classes.card}>
          <div className={classes.cardImage}>
            <img src={imagename} alt="image" />
          </div>
          <div>{price}</div>
          <div>{title}</div>
        </div>
  );
};

export default SingleProduct;
 {/* <div className={classes.card}>
          <div>
            <img src={imagename} alt="image" />
          </div>
          <div>{price}</div>
          <div>{title}</div>
        </div>
        <div className={classes.card}>
          <div>
            <img src={imagename} alt="image" />
          </div>
          <div>{price}</div>
          <div>{title}</div>
        </div>
      </div >
      <div className={classes.Container}>
        <div className={classes.card}>
          <div>
            <img src={imagename} alt="image" />
          </div>
          <div>{price}</div>
          <div>{title}</div>
        </div>
        <div className={classes.card}>
          <div>
            <img src={imagename} alt="image" />
          </div>
          <div>{price}</div>
          <div>{title}</div>
        </div>
        <div className={classes.card}>
          <div>
            <img src={imagename} alt="image" />
          </div>
          <div>{price}</div>
          <div>{title}</div>
        </div>
        <div className={classes.card}>
          <div>
            <img src={imagename} alt="image" />
          </div>
          <div>{price}</div>
          <div>{title}</div>
        </div>
      </div>
      <div className={classes.Container}>
        <div className={classes.card}>
          <div>
            <img src={imagename} alt="image" />
          </div>
          <div>{price}</div>
          <div>{title}</div>
        </div>
        <div className={classes.card}>
          <div>
            <img src={imagename} alt="image" />
          </div>
          <div>{price}</div>
          <div>{title}</div>
        </div>
        <div className={classes.card}>
          <div>
            <img src={imagename} alt="image" />
          </div>
          <div>{price}</div>
          <div>{title}</div>
        </div>
        <div className={classes.card}>
          <div>
            <img src={imagename} alt="image" />
          </div>
          <div>{price}</div>
          <div>{title}</div>
        </div> */}