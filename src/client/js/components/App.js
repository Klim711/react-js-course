import { Switch, Route } from 'react-router-dom';
import React from 'react';

import HomePage from './HomePage';
import FilmPage from './FilmPage';
import NotFoundPage from './NotFoundPage';
import ErrorBoundarry from './ErrorBoundary';

const App = () => (
  <ErrorBoundarry>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/films/:id" component={FilmPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </ErrorBoundarry>
);

export default App;
