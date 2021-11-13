import React, { ReactNode } from "react";

/* S or s are the writing conventions in importing styled components*/
import * as S from "./MainLayout.style";

/*for containment of any pages*/
type Props = {
  children?: ReactNode;
};
/*
 * MainLayout for putting the Header, Form, and Button above the NavigationBar
 * then the content of every page below the NavigationBar
 * */
const MainLayout = ({ children }: Props) => {
  return (
    <S.Wrapper>
      <S.SecondaryWrapper>{children}</S.SecondaryWrapper>
    </S.Wrapper>
  );
};

export default MainLayout;
