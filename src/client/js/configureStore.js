import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware } from 'redux';

import reducers from './reducers/index';
import saga from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(saga, store.dispatch, store.getState);

export {
  store
};