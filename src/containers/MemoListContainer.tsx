import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import * as api from '../api';
import { fetchMemoList } from '../reducers/memo';
import MemoListPage from '../page/MemoPage/MemoListPage';

/**
 * 메모 리스트 컨테이너
 */
function MemoListContainer() {
  const { memos } = useSelector((state: RootState) => state.memo);
  const dispatch = useDispatch();

  useEffect(() => {
    const memos = api.fetchMemoList();
    dispatch(fetchMemoList(memos));
  }, [dispatch]);

  return <MemoListPage memos={memos} />;
}

export default MemoListContainer;
