import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import * as api from '../api';
import { fetchDeletedMemoList } from '../reducers/memo';
import RemovePage from '../page/RemovePage';

/**
 * 휴지통 컴포넌트
 */
function RemovedMemoListContainer() {
  const { deletedMemos: memos } = useSelector((state: RootState) => state.memo);
  const dispatch = useDispatch();

  useEffect(() => {
    // 삭제된 메모를 DB에서 가져와서 스토어의 상태를 업데이트 시킨다.
    const fetchedMemos = api.fetchDeletedMemoList();
    dispatch(fetchDeletedMemoList(fetchedMemos));
  }, [dispatch]);

  return <RemovePage memos={memos} />;
}

export default RemovedMemoListContainer;
