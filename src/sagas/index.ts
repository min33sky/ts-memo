import { clearApiCallStatus, showDialog } from './../reducers/app';
import {
  addMemoRequest,
  FETCH_MEMO_LIST_REQUEST,
  fetchMemoListSuccess,
  ADD_MEMO_REQUEST,
  addMemoSuccess,
} from './../reducers/memo';
import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchMemoList, addMemo } from '../api';

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
        // ? 주소를 같이 보내서 다이얼로그 확인 누를 때 라우팅 처리하는게 좋겠다.
        // ? 에) url: 어쩌구저쩌구/memo.id
      }),
    );
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
