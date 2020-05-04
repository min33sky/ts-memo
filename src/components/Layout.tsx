import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
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

function Layout({ children }: LayoutProps) {
  return <Div>{children}</Div>;
}

export default Layout;
