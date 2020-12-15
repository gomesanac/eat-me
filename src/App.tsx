import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RecipesPage from './pages/RecipesPage';

const App: FunctionComponent = () => (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route path="/recipes" component={RecipesPage} />
  </Switch>
);

export default App;
