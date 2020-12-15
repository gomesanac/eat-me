import React, { FunctionComponent } from 'react';
import NavBar from '../NavBar';
import SearchBar from '../SearchBar';

import './style.css';

const Header: FunctionComponent = () => (
  <div>
    <NavBar />
    <SearchBar />
  </div>
);

export default Header;
