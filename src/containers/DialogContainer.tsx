import React from 'react';
import Dialog from '../components/Dialog';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';

/**
 * 다이얼로그 컨테이너
 */
function DialogContainer() {
  const { dialog } = useSelector((state: RootState) => state.app);

  return (
    <>
      <Dialog dialog={dialog} />
    </>
  );
}

export default DialogContainer;
