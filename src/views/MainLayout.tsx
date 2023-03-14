import React from 'react';
import type { ReactNode } from 'react';

/* for containment of any pages*/
type Props = {
  children?: ReactNode;
};
/*
 * MainLayout for putting the Header, Form, and Button above the NavigationBar
 * then the content of every page below the NavigationBar
 * */
const MainLayout = ({ children }: Props) => {
  return (
    <div className={'bg-gray-100'}>
      <div className={'container prose mx-auto'}>{children}</div>
    </div>
  );
};

export default MainLayout;
