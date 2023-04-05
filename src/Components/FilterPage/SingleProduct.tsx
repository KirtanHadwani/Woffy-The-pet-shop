import React from "react";
import classes from './Filter.module.css'

type Props = {
  imagename: any;
  price: any;
  title: string;
  brandName: string;
};
const SingleProduct: React.FC<Props> = ({ imagename, price, title, brandName }) => {
  return (
   
        <div className={classes.card}>
          <div className={classes.cardImage}>
            <img src={imagename} alt="image" />
          </div>
          <div className={classes.price}>From ${price}</div>
          <div>{title}</div>
          <div>{brandName}</div>
          <div><button className={classes.btn1}>SEND</button><button className={classes.btn1}>Send</button></div>
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