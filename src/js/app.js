
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import ReactDOM from 'react-dom';
import React from 'react';
import ErrorBoundarry from './components/ErrorBoundary';
import FilmPage from './components/FilmPage';
import '../styles/common.scss';

if (process.env.NODE_ENV === 'development') {
    console.log('Welcome to development');
}

if (process.env.NODE_ENV === 'production') {
    console.log('Welcome to production');
}

ReactDOM.render((
    <ErrorBoundarry>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/films/:id" component={FilmPage}/>
        </Switch>
      </BrowserRouter>
    </ErrorBoundarry>
  ), document.getElementById("container"));