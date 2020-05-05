import React, { useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as api from '../api';
import AddMemo from '../page/MemoPage/AddMemo';
import { addMemo } from '../reducers/memo';
import { Redirect } from 'react-router-dom';
import { Memo } from '../model';

function AddMemoContainer() {
  const newMemoId = useRef<number>(0); // 리다이렉트 하기 위한 변수
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (memo: Memo) => {
      const newMemo = api.addMemo(memo); // DB에 메모 저장
      dispatch(addMemo(newMemo)); // 스토어 업데이트
      newMemoId.current = newMemo.id!;
    },
    [dispatch],
  );

  if (newMemoId.current > 0) {
    return <Redirect to={`/memo/${newMemoId.current}`} />;
  }

  return <AddMemo onSubmit={handleSubmit} />;
}

export default AddMemoContainer;
