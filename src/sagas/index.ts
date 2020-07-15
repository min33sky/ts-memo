import { all, fork } from 'redux-saga/effects';
import memoSaga from './memo';
import appSaga from './app';

export default function* rootSaga() {
  /*
   * 1. fork()는 non-blocking으로 동작하므로 포크한 작업을
   * 종료하지 않아도 후속 작업을 진행한다
   * 2. fork()는 리턴값으로 Task를 취소할 수 있다.
   */
  yield all([fork(memoSaga), fork(appSaga)]);
}
