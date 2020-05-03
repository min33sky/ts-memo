import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  height: 800px;
  margin: 10px;
`;

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <Div>{children}</Div>;
}

export default Layout;
