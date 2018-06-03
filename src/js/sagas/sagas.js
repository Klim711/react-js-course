import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import * as Api from '../items';

function* fetchMovies(action) {
  const searchInfo = yield select((state) => state.movies);
  const movies = yield call(Api.getMovies, searchInfo);
  yield put({type: "MOVIES_FETCH_SUCCEEDED", items: movies});
}

function* saga() {
  yield takeEvery("MOVIES_FETCH", fetchMovies);
}

export default saga;