import React, { useCallback } from 'react';
import styled from 'styled-components';
import * as model from '../model';
import Button from './Button';

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
  const onClick = useCallback(() => {
    alert('구현중');
  }, []);

  return (
    <>
      <BackDrop onClick={onClick} />
      <Modal>
        <div>모달 내용: {dialog?.text}</div>
        <div>
          <Button onClick={onClick}>확인</Button>
          <Button onClick={onClick}>취소</Button>
        </div>
      </Modal>
    </>
  );
}

export default Dialog;
