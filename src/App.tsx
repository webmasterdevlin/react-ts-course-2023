import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import EagerRoutes from "./EagerRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <EagerRoutes />
    </BrowserRouter>
  );
};

export default App;
