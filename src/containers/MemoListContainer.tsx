import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import MemoListPage from '../page/MemoPage/MemoListPage';
import { fetchMemoListRequest } from '../reducers/memo';

/**
 * 메모 리스트 컨테이너
 */
function MemoListContainer() {
  const { memos } = useSelector((state: RootState) => state.memo);
  const dispatch = useDispatch();

  /**
   * TODO: 스토어에 메모 리스트 업데이트
   */

  useEffect(() => {
    dispatch(fetchMemoListRequest());
  }, [dispatch]);

  console.log('********* 실행 **********', memos);

  return <MemoListPage memos={memos} />;
}

export default MemoListContainer;
