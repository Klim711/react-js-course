
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import HomePage from './components/HomePage';
import React from 'react';
import ErrorBoundarry from './components/ErrorBoundary';
import FilmPage from './components/FilmPage';
import '../styles/common.scss';
import reducers from './reducers/index';
import saga from './sagas/sagas';

if (process.env.NODE_ENV === 'development') {
    console.log('Welcome to development');
}

if (process.env.NODE_ENV === 'production') {
    console.log('Welcome to production');
}

const initialState = {
  movies: {
    searchBy: {
      values: ['title', 'genres'],
      active: 'title',
    },
    searchValue: '',
    items: [],
    sortBy: {
      values: ['release_date', 'vote_average'],
      active: 'release_date',
    },
  },
  movie: {
    item: null,
    relatedMovies: {
      criteria: 'genres',
      items: [],
    },
  },
};
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  initialState,
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