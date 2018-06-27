import { fork, takeEvery } from 'redux-saga/effects';

function log(action) {
  // eslint-disable-next-line
  console.log('log', action.type, action);
}

function* monitorActions() {
  yield takeEvery('*', log);
}

export default function* logsFlow() {
  // eslint-disable-next-line
  console.log('starting logs flow.  Logging starting now.');
  yield fork(monitorActions);
}
