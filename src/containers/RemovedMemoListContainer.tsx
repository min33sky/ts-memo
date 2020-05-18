import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import * as api from '../api';
import { fetchDeletedMemoList } from '../reducers/memo';
import RemovePage from '../page/RemovePage';

function RemovedMemoListContainer() {
  const { deletedMemos: memos } = useSelector((state: RootState) => state.memo);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchedMemos = api.fetchDeletedMemoList();
    dispatch(fetchDeletedMemoList(fetchedMemos));
  }, [dispatch]);

  return <RemovePage memos={memos} />;
}

export default RemovedMemoListContainer;
