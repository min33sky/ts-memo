import React from 'react';
import styled from 'styled-components';
import DialogContainer from '../containers/DialogContainer';
import ToastListContainer from '../containers/ToastListContainer';

const LayoutWrapper = styled.div`
  display: flex;
  width: 80%;
  min-height: 800px;
  max-height: 800px;
`;

/**
 * 앱 레이아웃
 * TODO: 다이얼로그와 토스트 컴포넌트 넣자
 * @param children 레이아웃을 적용할 컴포넌트
 */
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToastListContainer />
      <DialogContainer />
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  );
}
