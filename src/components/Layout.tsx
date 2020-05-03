import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex: 1 1 auto;
  margin: 10px;
`;

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <Div>{children}</Div>;
}

export default Layout;
