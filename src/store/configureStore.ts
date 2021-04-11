import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

// connected-react-router 관련
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

// 리덕스 사가 미들웨어 생성
const sagaMiddleware = createSagaMiddleware();

//? connected-react-router에서 사용할 history 객체
export const history = createBrowserHistory();

/**
 * 스토어 생성 및 설정 함수
 */
function configureStore() {
  const middlewares = [createLogger(), sagaMiddleware, routerMiddleware(history)];
  // 개발 모드일때만 redux-devtools를 실행한다.
  const store =
    process.env.NODE_ENV === 'production'
      ? createStore(rootReducer(history), applyMiddleware(...middlewares))
      : createStore(rootReducer(history), composeWithDevTools(applyMiddleware(...middlewares)));

  /*
    * 루트 사가를 실행한다.
    ! run()는 applyMiddleware() 이후에 호출되어야 한다.
   */
  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
