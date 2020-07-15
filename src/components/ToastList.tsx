import React from 'react';
import ToastItem from './ToastItem';
import { Toast } from '../model';
import styled from 'styled-components';

const ToastListWrapper = styled.div`
  position: fixed;
  right: 15px;
  top: 15px;
  width: 250px;
`;

interface ToastListProps {
  toasts: Toast[];
}

/**
 * 토스트 리스트 컴포넌트
 * @param toasts 토스트 리스트
 */
function ToastList({ toasts }: ToastListProps) {
  return (
    <ToastListWrapper>
      {toasts.map((toast) => (
        <ToastItem toast={toast} key={toast.id} />
      ))}
    </ToastListWrapper>
  );
}

export default ToastList;
