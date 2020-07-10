import { combineReducers } from 'redux';
import memo from './memo';
import app from './app';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

/**
 * 스토어의 상태를 조회할 때 사용한다.
 */
export type RootState = ReturnType<ReturnType<typeof rootReducer>>;

/**
 * 루트 리듀서를 리턴하는 함수
 * @param history history 객체
 */
const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history), // connected-react-router에서 사용할 리듀서
    app,
    memo,
  });

export default rootReducer;
