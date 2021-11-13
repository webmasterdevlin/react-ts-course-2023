import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import EagerRoutes from "./EagerRoutes";
import LazyRoutes from "./LazyRoutes";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <LazyRoutes />
    </BrowserRouter>
  );
};

export default App;
