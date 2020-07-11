import React from 'react';
import styled from 'styled-components';
import DialogContainer from '../containers/DialogContainer';

const LayoutWrapper = styled.div`
  display: flex;
  flex: 1;
  width: auto;
  min-height: 700px;
  margin: 20px 40px;
`;

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * 전체 레이아웃
 * TODO: 다이얼로그와 토스트 컴포넌트 넣자
 * @param children 레이아웃을 적용할 컴포넌트
 */
function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* Toast */}
      <DialogContainer />
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  );
}

export default Layout;
