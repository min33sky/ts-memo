import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';


/**
 * 스토어 생성 및 설정 함수
 */
function configureStore() {
  return process.env.NODE_ENV === 'production'
    ? createStore(rootReducer, applyMiddleware(createLogger()))
    : createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(createLogger())),
      );
}

export default configureStore;
