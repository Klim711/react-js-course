
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import HomePage from './components/HomePage';
import React from 'react';
import ErrorBoundarry from './components/ErrorBoundary';
import FilmPage from './components/FilmPage';
import '../styles/common.scss';
import reducers from './reducers/index';

if (process.env.NODE_ENV === 'development') {
    console.log('Welcome to development');
}

if (process.env.NODE_ENV === 'production') {
    console.log('Welcome to production');
}

const initialState = {
  movies: {
    searchBy: {
      values: ['title', 'genre'],
      active: 'title',
    },
    searchValue: '',
    items: [],
    sortBy: {
      values: ['release date', 'rating'],
      active: 'release date',
    },
  },
  movie: {
    item: null,
    relatedMovies: {
      criteria: 'genre',
      items: [],
    },
  },
};

const store = createStore(reducers, initialState);

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