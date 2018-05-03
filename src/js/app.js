import HomePage from './components/HomePage/HomePage';
import '../styles/common.scss';
import ReactDOM from 'react-dom';
import React from 'react';
import ErrorBoundarry from './components/ErrorBoundary';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

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
        </Switch>
      </BrowserRouter>
    </ErrorBoundarry>
  ), document.getElementById("container"));