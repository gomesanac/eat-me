import React, { FunctionComponent, useState } from 'react';
import { Redirect } from 'react-router-dom';

import './style.css';

const NavBar: FunctionComponent = () => {
  const [redirect, setRedirect] = useState(false);

  if (redirect) return <Redirect to="/profile" />;

  return (
    <nav id="nav">
      <div id="profile-content">
        <button type="button" onClick={() => setRedirect(true)}>
          <i className="far fa-user" id="profile-icon" />
        </button>
      </div>
      <h1 id="nav-title">Eat Me</h1>
      <div id="search-content">
        <button type="button">
          <i className="fas fa-search" id="search-icon" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
