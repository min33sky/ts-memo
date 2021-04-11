import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { Memo } from '../model';
import { addMemoRequest } from '../reducers/memo';
import AddMemoPage from '../page/MemoPage/AddMemoPage';

/**
 * 메모 추가 컨테이너
 */
function AddMemoContainer() {
  // const newMemoId = useRef<number>(0); // 리다이렉트 하기 위한 변수
  const { apiCalling } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (memo: Memo) => {
      // const newMemo = api.addMemo(memo); // DB에 메모 저장
      // dispatch(addMemo(newMemo)); // 스토어 업데이트
      // newMemoId.current = newMemo.id!;
      dispatch(addMemoRequest(memo));
    },
    [dispatch]
  );

  // if (newMemoId.current > 0) {
  //   return <Redirect to={`/memo/${newMemoId.current}`} />;
  // }

  return <AddMemoPage onSubmit={handleSubmit} loading={apiCalling} />;
}

export default AddMemoContainer;
