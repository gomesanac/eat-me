import React, { FunctionComponent, useState } from 'react';
import { Redirect } from 'react-router-dom';

import './style.css';

const Header: FunctionComponent = () => {
  const [redirect, setRedirect] = useState(false);

  if (redirect) return <Redirect to="/profile" />;

  return (
    <header id="header">
      <div id="profile-content">
        <button type="button" onClick={() => setRedirect(true)}>
          <i className="far fa-user" id="profile-icon" />
        </button>
      </div>
      <h1 id="header-title">Eat Me</h1>
      <div id="search-content">
        <button type="button">
          <i className="fas fa-search" id="search-icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
