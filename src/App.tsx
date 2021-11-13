import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import EagerRoutes from "./EagerRoutes";
import LazyRoutes from "./LazyRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <LazyRoutes />
    </BrowserRouter>
  );
};

export default App;
