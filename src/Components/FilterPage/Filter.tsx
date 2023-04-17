import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Filter.module.css";
import Header from "../Header/Header";
import { DummyFilterItems } from "./DummyFilterItems";
import SingleProduct from "./SingleProduct";
import Footer from "../Footer/Footer";

function Filter() {
  const [brand, setbrand] = useState<string>("");
  const brandRef = useRef("");
  const [ptype, setptype] = useState<string>("");
  const ptyperef = useRef("");
  const [price, setprice] = useState<string>("");
  const priceref = useRef("");
  const [breed, setbreed] = useState<string>("");
  const breedref = useRef("");
  const [vegNonveg, setvegNonveg] = useState<string>("");
  const vegNonvegref = useRef("");

  const [apidata, setapiData] = useState<any>([]);
  let addtoken = localStorage.getItem("token");
  interface Headers {
    [key: string]: string;
  }
  const apiCall = async () => {
    console.log("this is price", price);
    let response = await fetch("https://woofy-db.onrender.com/filter", {
      // let response = await fetch("https://localhost:3000/products", {
      // credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: addtoken,
      } as Headers,
      // headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify({
        brandName: brand,
        breedType: breed,
        vegNonVeg: vegNonveg,
        price: price,
      }),
    });

    const res = await response.json();
    console.log("api data", res);

    setapiData(res.data);
  };
  localStorage.setItem("price", price);
  useEffect(() => {
    localStorage.setItem("price", price);
    apiCall();
  }, [brand, breed, vegNonveg, price]);

  const filteredData = apidata.filter(
    (data: any) =>
      (brand.toLowerCase() === ""
        ? data.brandName.toLowerCase()
        : data.brandName.toLowerCase() === brand.toLowerCase()) &&
      // (ptype === '' ? data.ProductType : data.ProductType === ptype) &&
      (price === "" ? data.price : data.price === price) &&
      (breed.toLowerCase() === ""
        ? data.breedType.toLowerCase()
        : data.breedType.toLowerCase() === breed.toLowerCase()) &&
      (vegNonveg.toLowerCase() === ""
        ? data.vegNonVeg.toLowerCase()
        : data.vegNonVeg.toLowerCase() === vegNonveg.toLowerCase())
  );

  const brandHandler = (e: any) => {
    brandRef.current = brand;
    setbrand(e.target.value);
  };
  const productHandler = (e: any) => {
    ptyperef.current = ptype;
    setptype(e.target.value);
  };
  const priceHandler = (e: any) => {
    priceref.current = price;
    setprice(e.target.value);
  };
  const breedHandler = (e: any) => {
    breedref.current = breed;
    setbreed(e.target.value);
  };
  const vegNonvegHandler = (e: any) => {
    vegNonvegref.current = vegNonveg;
    setvegNonveg(e.target.value);
  };

  console.log("dataaaaaaaaaa", apidata.productName);

  let content;
  if (apidata.length === 0) {
    content = (
      <h1 className={classes.noProd}>
        <img src="/assets/oops.png" alt="img" /> Oops! No products available.
      </h1>
    );
  } else {
    console.log("aaaaaaaaaa", price);

    content = apidata.map((prod: any) => (
      <SingleProduct
      id={prod._id}
        imagename={prod.productImage}
        price={prod.price}
        title={prod.productName}
        breedType={prod.breedType}
        vegNonveg={prod.vegNonVeg}
        brandName={prod.brandName}
      />
    ));
  }
  console.log(price);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={classes.filterContainer}>
        <h4>Filter</h4>
        <select
          className="form-select"
          aria-label="Default select example"
          value={brand}
          onChange={brandHandler}
        >
          <option hidden selected>
            Brand
          </option>
          <option value="Himalaya">Himalaya</option>
          <option value="Acana">Acana</option>
          <option value="Whiskas">Whiskas</option>
          <option value="Royal Canin">Royal Canin</option>
        </select>
        <select
          className="form-select"
          aria-label="Default select example"
          value={ptype}
          onChange={productHandler}
        >
          <option hidden selected>
            Product Type
          </option>
          <option value="Dog Food">Dog Food</option>
        </select>
        <select
          className="form-select"
          aria-label="Default select example"
          value={price}
          onChange={priceHandler}
        >
          <option hidden selected>
            Price
          </option>
          <option selected value="1">
            $100-$200
          </option>
          <option selected value="2">
            $200-$300
          </option>
          <option selected value="3">
            $300-$400
          </option>
        </select>

        <select
          className="form-select"
          aria-label="Default select example"
          value={breed}
          onChange={breedHandler}
        >
          <option hidden selected>
            Breed Type
          </option>
          <option value="Adult Breed">Adult Breed</option>
          <option value="All Breed">All Breed</option>
        </select>
        <select
          className="form-select"
          aria-label="Default select example"
          value={vegNonveg}
          onChange={vegNonvegHandler}
        >
          <option hidden selected>
            Veg/Non-veg
          </option>
          <option value="Veg">Veg</option>
          <option value="Non Veg">Non Veg</option>
        </select>
      </div>
      <div className={classes.ProductsContainer}>
        {/* {apidata.map((prod: any) => (
            <SingleProduct
              // imagename={prod.productImage}
              price={prod.price}
              // title={prod.productName}
              // breedType={prod.breedType}
              // vegNonveg={prod.vegNonVeg}
              // brandName={prod.brandName}
            />
          ))} */}
        {content}
      </div>
    </div>
  );
}

export default Filter;
