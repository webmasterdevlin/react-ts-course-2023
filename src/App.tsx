/* eslint-disable autofix/no-unused-vars */
/* eslint-disable import/order */
import React from 'react';

import State from './built-in-hooks/State';
import Effect1 from './built-in-hooks/Effect1';
import Effect2 from './built-in-hooks/Effect2';
import Memo from './built-in-hooks/Memo';
import Callback from './built-in-hooks/Callback';
import Ref from './built-in-hooks/Ref';

import { BrowserRouter } from 'react-router-dom';
import EagerRoutes from './EagerRoutes';
import LazyRoutes from './LazyRoutes';
import NavigationBar from './components/NavigationBar';
import Effect3 from './built-in-hooks/Effect3';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container prose mx-auto px-4">
        {/* <State /> */}
        {/* <Effect1 /> */}
        {/* <Effect2 /> */}
        {/* <Effect3 cost={20} discount={4} /> */}
        {/* <Memo /> */}
        {/* <Callback /> */}
        <Ref />
      </div>

      {/* <NavigationBar /> */}
      {/* <LazyRoutes /> */}
    </BrowserRouter>
  );
};

export default App;
