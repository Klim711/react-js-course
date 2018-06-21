import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import '../styles/common.scss';

import {store} from './configureStore';
import App from './components/App';

ReactDOM.hydrate((
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
), document.getElementById("container"));