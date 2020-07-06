import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import MemoListPage from '../page/MemoPage/MemoListPage';

/**
 * 메모 리스트 컨테이너
 */
function MemoListContainer() {
  const { memos } = useSelector((state: RootState) => state.memo);

  return <MemoListPage memos={memos} />;
}

export default MemoListContainer;
