import React from 'react';
import styled from 'styled-components';

const MainLayout = styled.main`
  flex: 1 1 auto;
  overflow: auto;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

interface MainProps {
  children: React.ReactNode;
}

function Main({ children }: MainProps) {
  return <MainLayout>{children}</MainLayout>;
}

export default Main;
