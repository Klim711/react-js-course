import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import '../styles/common.scss';

import HomePage from './components/HomePage';
import FilmPage from './components/FilmPage';
import ErrorBoundarry from './components/ErrorBoundary';
import {store, persistor} from './configureStore';

if (process.env.NODE_ENV === 'development') {
  console.log('Welcome to development');
}

if (process.env.NODE_ENV === 'production') {
  console.log('Welcome to production');
}

ReactDOM.render((
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ErrorBoundarry>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/films/:id" component={FilmPage}/>
          </Switch>
        </BrowserRouter>
      </ErrorBoundarry>
    </PersistGate>
  </Provider>
), document.getElementById("container"));