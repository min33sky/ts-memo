import React, { useEffect } from 'react';
import * as api from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeletedMemoList, fetchMemoListRequest } from '../reducers/memo';
import HomePage from '../page/HomePage';

/**
 * 홈 컨테이너
 */
function HomeContainer() {
  const { memos, deletedMemos } = useSelector((state) => state.memo);
  const { apiCalling } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    // DB에서 메모들을 가져온다.
    const deletedMemos = api.fetchDeletedMemoList();

    // 스토어 상태 업데이트
    dispatch(fetchMemoListRequest());
    dispatch(fetchDeletedMemoList(deletedMemos));
  }, [dispatch]);

  return (
    <HomePage
      memoNumber={memos.length}
      deletedMemoNumber={deletedMemos.length}
      loading={apiCalling}
    />
  );
}

export default HomeContainer;
