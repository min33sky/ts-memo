import { clearApiCallStatus } from './../reducers/app';
import {
  FETCH_MEMO_LIST_REQUEST,
  fetchMemoListSuccess,
} from './../reducers/memo';
import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchMemoList } from '../api';

function* fetchMemoListData() {
  try {
    console.log('*** saga 작동 중 :) ***');
    const memos = yield call(fetchMemoList);
    yield put(fetchMemoListSuccess(memos));
  } catch (error) {
    // TODO: 실패 시 실패 액션 호출
  } finally {
    // API 요청 끝
    yield put(clearApiCallStatus());
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_MEMO_LIST_REQUEST, fetchMemoListData);
}
