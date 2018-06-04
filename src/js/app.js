
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import '../styles/common.scss';

import HomePage from './components/HomePage';
import FilmPage from './components/FilmPage';
import ErrorBoundarry from './components/ErrorBoundary';
import reducers from './reducers/index';
import saga from './sagas/sagas';

if (process.env.NODE_ENV === 'development') {
  console.log('Welcome to development');
}

if (process.env.NODE_ENV === 'production') {
  console.log('Welcome to production');
}


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(saga, store.dispatch, store.getState);


ReactDOM.render((
  <Provider store={store}>
    <ErrorBoundarry>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/films/:id" component={FilmPage}/>
        </Switch>
      </BrowserRouter>
    </ErrorBoundarry>
  </Provider>
), document.getElementById("container"));