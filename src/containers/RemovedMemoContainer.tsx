import React, { useEffect, useRef, useState, useCallback } from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import * as api from '../api';
import { fetchDeletedMemo, restoreMemo } from '../reducers/memo';
import RemoveMemoViewer from '../page/RemovePage/RemoveMemoViewer';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { Memo } from '../model';

interface RouteProps {
  id: string;
}

function RemovedMemoContainer({ match }: RouteComponentProps<RouteProps>) {
  const { deletedMemos: memos } = useSelector((state: RootState) => state.memo);
  const [memo, setMemo] = useState<Memo | null>(null);
  const [restored, setRestored] = useState(false);
  const dispatch = useDispatch();
  const memoId = useRef<number>(0);

  useEffect(() => {
    const updateMemo = () => {
      const removedMemo = memos.find((memo) => memo.id === memoId.current);
      if (removedMemo) {
        setMemo(removedMemo);
      }
    };
    memoId.current = parseInt(match.params.id, 10);
    const fetchedMemo = api.fetchMemo(memoId.current);
    if (fetchedMemo) {
      fetchDeletedMemo(fetchedMemo);
    }
    updateMemo();
  }, [match.params.id, memos]);

  const onRestore = useCallback(
    (id: number) => {
      api.resotreMemo(memoId.current);
      dispatch(restoreMemo(memoId.current));
      setRestored(true);
    },
    [dispatch],
  );

  if (!memo) {
    return null;
  }

  if (restored) {
    return <Redirect to='/remove' />;
  }

  return <RemoveMemoViewer memo={memo} onRestore={onRestore} />;
}

export default RemovedMemoContainer;
