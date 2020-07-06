import { combineReducers } from 'redux';
import memo from './memo';
import app from './app';

/**
 * 스토어의 상태를 조회할 때 사용한다.
 */
export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  app,
  memo,
});

export default rootReducer;
