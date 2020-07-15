import {
  showToast,
  SHOW_TOAST,
  addToast,
  removeToast,
} from './../reducers/app';

import { put, takeEvery, delay, all } from 'redux-saga/effects';
import { isString } from 'util';

// 토스트 아이디로 사용
let _id = 0;

/**
 * 토스트를 보여주는 제너레이터
 * @param action 토스트를 띄우는 액션
 */
function* showToastSaga(action: ReturnType<typeof showToast>) {
  try {
    const nextId = _id + 1;
    _id = nextId;

    const text = action.payload;

    // 토스트를 상태에 추가한다.
    yield put(
      addToast({
        id: nextId,
        text,
      }),
    );

    // 3초 대기한다.
    yield delay(3000);

    // 토스트를 상태에서 제거한다.
    yield put(removeToast(nextId));
  } catch (error) {
    // 토스트 보여주기 에러
  }
}

/**
 * Failure 액션 처리하는 제너레이터
 * @param action Failure 액션
 */
function* handleFailureSaga(action: { payload: any }) {
  const { payload } = action;

  // 실패 액션 시 토스트를 띄운다
  if (isString(payload)) {
    yield put({ type: SHOW_TOAST, payload });
  }
}

export default function* appSaga() {
  yield all([
    takeEvery(SHOW_TOAST, showToastSaga),
    /*
     * takeEvery() 이펙터는 액션 타입 문자열 말고 타입 패턴을 계산하는 함수도 받을 수 있다.
     */
    takeEvery((action: any) => {
      return action.type.endsWith('_FAILURE');
    }, handleFailureSaga),
  ]);
}
