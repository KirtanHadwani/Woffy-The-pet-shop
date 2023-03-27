import React from "react";
import classes from "./Founders.module.css";
import Foundersimg from "../../../assets/AboutBanner/Founders.png";

function Founders() {
  return (
    <div className={classes.FoundersContainer}>
      <div>
        <h4>Message From Founders</h4>
      </div>
      <div>
        <div className={classes.paraUpper}>
          <div>
            <p>
              Woffy has its humble beginnings from a very personal story; as dog
              lovers and pet parents of the world's best dog (yes, every pet
              parent says this). Rex came into our lives and changed it forever.
              For us, Rex is a companion that always loves, a friend that never
              judges and a child that is always ready to have some fun. He is
              truly the heart and soul of our family.
            </p>
          </div>
          <div>
            <p>
              As pet parents, we totally understand the feeling of celebrating
              life with your pet. Somethings just can’t be explained; be it the
              excitement of shopping for your pet, the comfort of a cuddle or
              the workday guilt. We know the pet-parenting journey is full of
              up’s and down’s, but what if you had someone to hold your hand and
              support your through this journey? Rex ignited a passion so strong
              that we saw ourselves travelling from Ahmedabad to Pune to share
              our love for pets with India. Also we have our own plant at Pune
              area with products making in machineries and will be all the Made
              In India product.
            </p>
          </div>
        </div>
        <img
          className={classes.foundersImg}
          src={Foundersimg}
          alt="Founders Image"
        />
      </div>
      <div className={classes.paraDown}>
        For every products and process of Woffy Pet Shop, we always consider and
        focus on customers' safety and satisfaction. Additionally, we also focus
        on environmental safety along with the highest quality standard. We
        operate our business with care of transparency and good governance so
        that there ​will be a consistency in social development in all sectors
        and in the country. <br /><br /> Above all, we intend to develop our products to be
        recognized by international standards as well as upholding the
        responsibility to return good deeds to our country and people. We help
        to develop and strengthen the value of the quality of life for
        employees, partners and local communities. This is for the better
        living, well-being, and sustainability.
      </div>
    </div>
  );
}

export default Founders;
