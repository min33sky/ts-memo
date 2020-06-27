import React from 'react';
import styled from 'styled-components';

const MainLayout = styled.main`
  flex: 1 1 auto;
  overflow: auto;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  background-color: ivory;
`;

/**
 * 메인 화면
 * @param children 메인 화면에 보여줄 컴포넌트
 */
function Main({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}

export default Main;
