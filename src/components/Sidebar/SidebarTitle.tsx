import React from 'react';
import styled from 'styled-components';

const Layout = styled.h1`
  padding: 0 10px;
  text-align: center;
`;

/**
 * 사이드바 제목 컴포넌트
 * @param children 사이드바 제목
 */
export default function SidebarTitle({ children }: { children: string }) {
  return <Layout>{children}</Layout>;
}
