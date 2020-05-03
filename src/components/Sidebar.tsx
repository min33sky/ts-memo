import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Aside = styled.aside`
  width: 200px;
  border: 1px solid #ccc;
  margin-right: 10px;
  border-radius: 4px;
`;

const LinkBtn = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  padding: 10px;
  display: block;
`;

interface SidebarProps {
  children: React.ReactNode;
}

function Sidebar({ children }: SidebarProps) {
  return <Aside>{children}</Aside>;
}

function SidebarTitle({ children }: SidebarProps) {
  return <h1 style={{ padding: '0 10px' }}>{children}</h1>;
}

interface SidebarBackButtonProps {
  to: string;
}

function SidebarBackButton({ to }: SidebarBackButtonProps) {
  return <LinkBtn to={to}>{`<`}</LinkBtn>;
}

export { SidebarTitle, SidebarBackButton };

export default Sidebar;
