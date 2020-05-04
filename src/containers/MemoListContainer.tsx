import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import * as api from '../api';
import { fetchMemoList } from '../reducers/memo';
import MemoListPage from '../page/MemoPage/MemoListPage';

function MemoListContainer() {
  const { memos } = useSelector((state: RootState) => state.memo);
  const dispatch = useDispatch();

  useEffect(() => {
    // DB에 저장된 메모를 가져온다.
    const memos = api.fetchMemoList();
    // 스토어에 메모를 저장한다.
    dispatch(fetchMemoList(memos));
  }, [dispatch]);

  return <MemoListPage memos={memos} />;
}

export default MemoListContainer;
