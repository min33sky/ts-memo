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
  height: 130px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export interface DialogProps {
  dialog?: model.Dialog;
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
        <ModalContent>
          <div>{dialog?.text}</div>
        </ModalContent>
        <ModalButtonWrapper>
          {dialog.type === 'confirm' && (
            <Button onClick={onCancel}>취소</Button>
          )}
          <Button onClick={onConfirm}>확인</Button>
        </ModalButtonWrapper>
      </Modal>
    </>
  );
}

export default Dialog;
