import React, { useCallback } from 'react';
import styled from 'styled-components';
import * as model from '../model';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { cancelDialog, confirmDialog } from '../reducers/app';

const BackDrop = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Modal = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 100px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`;

export interface DialogProps {
  dialog?: model.Dialog;
  /**
   * cancelDialog, confirmDialog
   */
}

/**
 * 다이얼로그 컴포넌트
 * @param param0
 */
function Dialog({ dialog }: DialogProps) {
  const dispatch = useDispatch();

  const onConfirm = useCallback(() => {
    dispatch(confirmDialog());
  }, [dispatch]);

  const onCancel = useCallback(() => {
    dispatch(cancelDialog());
  }, [dispatch]);

  // 다이얼로그가 없으면 보여주지 않는다.
  if (!dialog) return null;

  return (
    <>
      <BackDrop onClick={onConfirm} />
      <Modal>
        <div>모달 내용: {dialog?.text}</div>
        <div>
          {dialog.type === 'confirm' && (
            <Button onClick={onCancel}>취소</Button>
          )}
          <Button onClick={onConfirm}>확인</Button>
        </div>
      </Modal>
    </>
  );
}

export default Dialog;
