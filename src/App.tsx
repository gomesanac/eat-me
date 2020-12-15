import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';

const App: FunctionComponent = () => (
  <Switch>
    <Route exact to="/" component={LoginPage} />
    <Route to="/recipes">
      <div>
        <h1>Recipes</h1>
      </div>
    </Route>
  </Switch>
);

export default App;
