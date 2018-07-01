import { fork, all } from 'redux-saga/effects';
// import logsFlow from './logs';
import recipesFlow from './recipes';

export default function* rootSaga() {
  yield all([
    // fork(logsFlow), // Enable to debug
    fork(recipesFlow),
  ]);
}
