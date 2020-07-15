import {
  clearApiCallStatus,
  showDialog,
  showToast,
  CONFIRM_DIALOG,
  SHOW_TOAST,
  addToast,
  removeToast,
} from './../reducers/app';
import {
  addMemoRequest,
  FETCH_MEMO_LIST_REQUEST,
  fetchMemoListSuccess,
  ADD_MEMO_REQUEST,
  addMemoSuccess,
  addMemoFailure,
} from './../reducers/memo';
import {
  takeLatest,
  call,
  put,
  take,
  takeEvery,
  delay,
} from 'redux-saga/effects';
import { fetchMemoList, addMemo } from '../api';
import { push } from 'connected-react-router';
import { isString } from 'util';

/**
 * 메모 리스트를 가져오는 제너레이터
 */
function* fetchMemoListData() {
  try {
    const memos = yield call(fetchMemoList);
    yield put(fetchMemoListSuccess(memos));
  } catch (error) {
    // TODO: 실패 시 실패 액션 호출
  } finally {
    // API 요청 끝
    yield put(clearApiCallStatus());
  }
}

/**
 * 메모를 추가하는 제너레이터
 * @param action 메모 추가 요청 액션 타입
 */
function* addMemoSaga(action: ReturnType<typeof addMemoRequest>) {
  const { payload } = action;
  if (!payload) return;

  try {
    console.log('*** 메모 추가 SAGA ***');
    const memo = yield call(addMemo, payload);
    yield put(addMemoSuccess(memo));
    yield put(
      showDialog({
        type: 'alert',
        text: '메모가 생성되었습니다. 메뉴 수정 화면으로 이동합니다.',
      }),
    );

    // 모달 확인 액션을 대기
    yield take(CONFIRM_DIALOG);

    // 작성한 메모 페이지로 라우팅 (connected-react-router 모듈 사용)
    yield put(push(`/memo/${memo.id}`));
  } catch (error) {
    yield put(addMemoFailure('메모 추가에 실패했습니다.'));
  } finally {
    yield put(clearApiCallStatus());
  }
}

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

export default function* rootSaga() {
  yield takeLatest(FETCH_MEMO_LIST_REQUEST, fetchMemoListData);
  yield takeLatest(ADD_MEMO_REQUEST, addMemoSaga);
  yield takeEvery(SHOW_TOAST, showToastSaga);

  /*
   * takeEvery() 이펙터는 액션 타입 문자열 말고 타입 패턴을 계산하는 함수도 받을 수 있다.
   */
  yield takeEvery((action: any) => {
    return action.type.endsWith('_FAILURE');
  }, handleFailureSaga);
}
