import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  display: flex;
  flex: 1;
  width: auto;
  height: 850px;
  margin: 20px 40px;
  background: white;
`;

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * 전체 레이아웃
 * @param children 레이아웃을 적용할 컴포넌트
 */
function Layout({ children }: LayoutProps) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}

export default Layout;
