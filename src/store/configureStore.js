/* eslint no-underscore-dangle: 0 */
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reactotron from 'reactotron-react-js';
import rootReducer from '../reducers';
import sagas from '../sagas';
import './ReactotronConfig';

export default function configureStore() {
  const sagaMonitor = Reactotron.createSagaMonitor();
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  const enhancer = composeWithDevTools({ name: 'Test' })(
    applyMiddleware(sagaMiddleware),
  );
  const createStoreFunction = global.__DEV__
    ? Reactotron.createStore
    : createStore;
  const store = createStoreFunction(rootReducer, enhancer);
  sagaMiddleware.run(sagas);

  return { store };
}
