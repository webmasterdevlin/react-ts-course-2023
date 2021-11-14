import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { render, RenderOptions } from "@testing-library/react";

import * as S from "../views/MainLayout.style";
import NavigationBar from "../components/NavigationBar";

const AllTheProviders: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <S.Header>
        <NavigationBar />
      </S.Header>
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
