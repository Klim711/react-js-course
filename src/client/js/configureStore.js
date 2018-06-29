import createSagaMiddleware, {END} from 'redux-saga';
import {createStore, applyMiddleware } from 'redux';

import reducers from './reducers/index';
import saga from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

export default (initialState) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  sagaMiddleware.run(saga, store.dispatch, store.getState);

  return store;
};