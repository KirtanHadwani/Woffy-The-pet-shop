import React from "react";

import "./App.css";
import Header from "./Components/Header";
import Offers from "./Components/Offers";
import Services from "./Components/SingleOffer";
import Slider from "./Components/Slider";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Offers />
    </>
  );
}

export default App;
