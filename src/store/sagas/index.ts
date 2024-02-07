import { all, fork } from 'redux-saga/effects';
import { todoWatcher } from './todosSaga';

export function* rootSaga() {
  yield all([fork(todoWatcher)]);
}
