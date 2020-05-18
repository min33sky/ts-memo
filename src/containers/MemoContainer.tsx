import React, { useState, useRef, useEffect, useCallback } from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { Memo } from '../model';
import MemoViewer from '../page/MemoPage/MemoViewer';
import { deleteMemo } from '../reducers/memo';
import * as api from '../api';

interface MatchProps {
  id: string;
}

function MemoContainer({ match }: RouteComponentProps<MatchProps>) {
  const { memos } = useSelector((state: RootState) => state.memo);
  const [memo, setMemo] = useState<Memo | null>(null);
  const [isDeleted, setIsDeleted] = useState(false);
  const dispatch = useDispatch();
  const memoId = useRef<number>(0);

  useEffect(() => {
    memoId.current = parseInt(match.params.id, 10);
    const fetchedMemo = memos.find((memo) => memo.id === memoId.current);
    if (fetchedMemo) {
      setMemo(fetchedMemo);
    }
  }, [match.params.id, memos]);

  const onDeleteMemo = useCallback(
    (id: number) => {
      dispatch(deleteMemo(id)); // 스토어 업데이트
      api.deleteMemo(id); // DB 업데이트
      setIsDeleted(true); // 리다이렉트
    },
    [dispatch],
  );

  if (isDeleted) {
    return <Redirect to='/memo' />;
  }

  if (!memo) {
    return null;
  }

  return <MemoViewer memo={memo} onDeleteMemo={onDeleteMemo} />;
}

export default MemoContainer;
