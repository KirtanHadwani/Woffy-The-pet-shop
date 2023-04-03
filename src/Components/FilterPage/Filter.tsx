import React,{useRef, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Filter.module.css";
import Header from "../Header/Header";
import { DummyFilterItems } from "./DummyFilterItems";
import SingleProduct from "./SingleProduct";
import Footer from "../Footer/Footer";


function Filter() {
  const [brand, setbrand] = useState<string>('');
  const brandRef = useRef('');
  const [ptype, setptype] = useState<string>('');
  const ptyperef = useRef('');
  const [breed, setbreed] = useState<string>('');
  const breedref = useRef('');
  const [vegNonveg, setvegNonveg] = useState<string>('');
  const vegNonvegref = useRef('');


  const filteredData = DummyFilterItems.filter((data)=>(
    (brand === '' ? data.Brand : data.Brand === brand) &&
    (ptype === '' ? data.ProductType : data.ProductType === ptype) &&
    (breed === '' ? data.BreedType : data.BreedType === breed) &&
    (vegNonveg === '' ? data.VegNonveg : data.VegNonveg === vegNonveg)
  ))

  const brandHandler =(e:any)=>{
    brandRef.current = brand;
    setbrand(e.target.value);
  }
  const productHandler =(e:any)=>{
    ptyperef.current = ptype;
    setptype(e.target.value);
  }
  const breedHandler =(e:any)=>{
    breedref.current = breed;
    setbreed(e.target.value);
  }
  const vegNonvegHandler =(e:any)=>{
    vegNonvegref.current = vegNonveg;
    setvegNonveg(e.target.value);
  }

  console.log(filteredData);

  return (
    <div>
      <div>
        <Header />
      </div>
        <div className={classes.filterContainer}>
          <h4>Filter</h4>
          <select className="form-select" aria-label="Default select example" value={brand} onChange={brandHandler}>
            <option selected>Brand</option>
            <option value="Himalaya">Himalaya</option>
            <option value="Acana">Acana</option>
            <option value="Whiskas">Whiskas</option>
            <option value="Royal Canin">Royal Canin</option>
          </select>
          <select className="form-select" aria-label="Default select example" value={ptype} onChange={productHandler}>
            <option selected>Product Type</option>
            <option value="Dog Food">Dog Food</option>
          </select>
          {/* <select className="form-select" aria-label="Default select example">
          <option selected>Price</option>
        <option value=""><input type="range" className="form-range" id="customRange1"/></option>
        </select> */}
          <select className="form-select" aria-label="Default select example" value={breed} onChange={breedHandler}>
            <option selected>Breed Type</option>
            <option value="Adult Breed">Adult Breed</option>
            <option value="All Breed">All Breed</option>
          </select>
          <select className="form-select" aria-label="Default select example" value={vegNonveg} onChange={vegNonvegHandler}>
            <option selected>Veg/Non-veg</option>
            <option value="Veg">Veg</option>
            <option value="Non-veg">Non-veg</option>
          </select>
        </div>
        <div className={classes.ProductsContainer}>


          {filteredData.map((prod) => (
            <SingleProduct
              imagename={prod.src}
              title={prod.Brand}
              price={prod.ProductType}
            />
          ))}
        </div>
      
    </div>
  );
}

export default Filter;
