import React,{useEffect, useRef, useState} from "react";
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
  const [price, setprice] = useState<string>('');
  const priceref = useRef('');
  const [breed, setbreed] = useState<string>('');
  const breedref = useRef('');
  const [vegNonveg, setvegNonveg] = useState<string>('');
  const vegNonvegref = useRef('');

  const [apidata, setapiData] = useState<any>([]);
let addtoken = localStorage.getItem("token")
interface Headers {
  [key: string]: string
}
  const apiCall = async() =>{
  let response = await fetch("https://woofy-db.onrender.com/products", {
    // let response = await fetch("https://localhost:3000/products", {
    // credentials: "include",
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: addtoken }as Headers,
    // headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });

  const res = await response.json();
  console.log("api data",res);
  
  setapiData(res.data)
}

  useEffect(()=> {
    apiCall();
  }, [])


  const filteredData = apidata.filter((data:any)=>(
    (brand.toLowerCase() === '' ? data.brandName.toLowerCase() : data.brandName.toLowerCase() === brand.toLowerCase()) &&
    // (ptype === '' ? data.ProductType : data.ProductType === ptype) &&
    // (price === '' ? data.price : data.price === price)&&
    (breed.toLowerCase() === '' ? data.breedType.toLowerCase() : data.breedType.toLowerCase() === breed.toLowerCase()) &&
    (vegNonveg.toLowerCase() === '' ? data.vegNonVeg.toLowerCase() : data.vegNonVeg.toLowerCase() === vegNonveg.toLowerCase())
  ))

  const brandHandler =(e:any)=>{
    brandRef.current = brand;
    setbrand(e.target.value);
  }
  const productHandler =(e:any)=>{
    ptyperef.current = ptype;
    setptype(e.target.value);
  }
  const priceHandler =(e:any)=>{
    priceref.current = price;
    setprice(e.target.value);
  }
  const breedHandler =(e:any)=>{
    breedref.current = breed;
    setbreed(e.target.value);
  }
  const vegNonvegHandler =(e:any)=>{
    vegNonvegref.current = vegNonveg;
    setvegNonveg(e.target.value);
  }

  console.log("dataaaaaaaaaa", apidata.productName);


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
          <option selected>Price</option>
          <option selected>Price</option>
          <option selected>Price</option>
          <option selected>Price</option>
        <option value=""><input type="range" className="form-range" id="customRange1"/></option>
        </select> */}

          <select className="form-select" aria-label="Default select example" value={breed} onChange={breedHandler}>
            <option selected>Breed Type</option>
            <option value="Adult Breed">Adult Breed</option>
            <option value="All Breed">All Breed</option>
          </select>
          <select className="form-select" aria-label="Default select example" value={vegNonveg} onChange={vegNonvegHandler}>
            <option hidden selected>Veg/Non-veg</option>
            <option value="Veg">Veg</option>
            <option value="Non-veg">Non-veg</option>
          </select>
        </div>
        <div className={classes.ProductsContainer}>


          {filteredData.map((prod: any) => (
            <SingleProduct
              imagename={prod.productImage}
              price={prod.price}
              title={prod.productName}
              brandName={prod.brandName}
            />
          ))}
          
        </div>
      
    </div>
  );
}

export default Filter;
