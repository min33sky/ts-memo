import React from 'react';
import { Toast } from '../model';
import styled from 'styled-components';

const ToastItemWrapper = styled.div`
  display: inline-block;
  background: #fff;
  padding: 15px 20px;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin-bottom: 15px;
`;

interface ToastItemProps {
  toast: Toast;
}

/**
 * 토스트 내용을 보여주는 컴포넌트
 * @param toast 토스트 내용
 */
function ToastItem({ toast: { text } }: ToastItemProps) {
  return <ToastItemWrapper>{text}</ToastItemWrapper>;
}

export default ToastItem;
