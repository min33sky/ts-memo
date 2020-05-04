import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

function configureStore() {
  return process.env.NODE_ENV === 'production'
    ? createStore(rootReducer, applyMiddleware(createLogger()))
    : createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(createLogger())),
      );
}

export default configureStore;
