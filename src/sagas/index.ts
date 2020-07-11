import {
  clearApiCallStatus,
  showDialog,
  CONFIRM_DIALOG,
} from './../reducers/app';
import {
  addMemoRequest,
  FETCH_MEMO_LIST_REQUEST,
  fetchMemoListSuccess,
  ADD_MEMO_REQUEST,
  addMemoSuccess,
} from './../reducers/memo';
import { takeLatest, call, put, take } from 'redux-saga/effects';
import { fetchMemoList, addMemo } from '../api';
import { push } from 'connected-react-router';

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
    // 에러
  } finally {
    yield put(clearApiCallStatus());
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_MEMO_LIST_REQUEST, fetchMemoListData);
  yield takeLatest(ADD_MEMO_REQUEST, addMemoSaga);
}
