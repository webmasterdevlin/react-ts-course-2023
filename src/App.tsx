import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CarClass from "./CarClass";
import CarFunctional from "./CarFunctional";

const App = () => {
  return (
    <div className="App">
      <CarClass />
      <CarFunctional alergy={"Kiwi"} />
    </div>
  );
};

export default App;
