import React from "react";
import classes from "./Filter.module.css";
import { useNavigate } from "react-router-dom";
import ProductDetail from "./ProductDetail";

type Props = {
  id: any;
  imagename: any;
  price: any;
  title: string;
  breedType: string;
  vegNonveg: string
  brandName: string;
};
const SingleProduct: React.FC<Props> = ({
  id,
  imagename,
  price,
  title,
  breedType,
  vegNonveg,
  brandName,
}) => {
  const navigate = useNavigate();
  function DetailFunc(id:any){
    navigate(`/ProductDetail/${id}`)
   console.log(id)
  }
  return (
    <div className={classes.card}>
      <div className={classes.cardImage}>
        <img src={imagename} alt="image" />
      </div>
      <div className={classes.price}>From ${price}</div>
      <div>{title}</div> 
      <div>{breedType}-{vegNonveg}</div>
       <div>{brandName}</div> 
      <div>
        <button className={classes.btn1} onClick={()=>DetailFunc(id)}>Details</button>
        <button className={classes.btn1}>Add to Cart</button>
      </div>
    </div>
  );
};

export default SingleProduct;
{
  /* <div className={classes.card}>
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
        </div> */
}
