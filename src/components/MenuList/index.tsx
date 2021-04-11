import React from 'react';
import styled from 'styled-components';

const Layout = styled.ul`
  list-style: none;
  padding-left: 0;
`;

/**
 * 메모 리스트 컴포넌트
 * @param children 메모 목록
 */
export default function MenuList({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}
