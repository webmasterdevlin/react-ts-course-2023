import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ShoppingListPage from "./pages/ShoppingListPage";
import WorkTodosPage from "./pages/WorkTodosPage";

const EagerRoutes = () => (
  <Routes>
    <Route path="/" element={<WorkTodosPage />} />
    <Route path="/shopping-list" element={<ShoppingListPage />} />
    <Route path="/auth" element={<LoginPage />} />
  </Routes>
);

export default EagerRoutes;
