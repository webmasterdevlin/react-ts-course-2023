import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { render, RenderOptions } from "@testing-library/react";
import NavigationBar from "../components/NavigationBar";

type Props = {
  children: React.ReactNode;
};
const AllTheProviders: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <NavigationBar />
      {children}
    </BrowserRouter>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
