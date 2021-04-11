import * as React from 'react';
import styled from 'styled-components';

const Layout = styled.aside`
  width: 180px;
  border: 1px solid #ccc;
  margin-right: 10px;
  border-radius: 4px;
  background-color: ivory;
  overflow-y: auto;
`;

/**
 * 사이드바 레이아웃
 * @param children 사이드바를 적용할 컴포넌트
 */
function Sidebar({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}

export default Sidebar;
