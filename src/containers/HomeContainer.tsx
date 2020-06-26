import React, { useEffect } from 'react';
import * as api from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMemoList, fetchDeletedMemoList } from '../reducers/memo';
import HomePage from '../page/HomePage';
import { RootState } from '../reducers';

/**
 * 홈 컨테이너
 */
function HomeContainer() {
  const { memos, deletedMemos } = useSelector((state: RootState) => state.memo);
  const dispatch = useDispatch();

  useEffect(() => {
    // DB에서 메모들을 가져온다.
    const memos = api.fetchMemoList();
    const deletedMemos = api.fetchDeletedMemoList();

    // 스토어 상태 업데이트
    dispatch(fetchMemoList(memos));
    dispatch(fetchDeletedMemoList(deletedMemos));
  }, [dispatch]);

  return (
    <HomePage
      memoNumber={memos.length}
      deletedMemoNumber={deletedMemos.length}
    />
  );
}

export default HomeContainer;
