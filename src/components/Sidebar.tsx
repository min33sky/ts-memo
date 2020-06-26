import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdArrowRoundBack } from 'react-icons/io';

const Aside = styled.aside`
  width: 150px;
  border: 1px solid #ccc;
  margin-right: 10px;
  border-radius: 4px;
  overflow-y: auto;
`;

const LinkBtn = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  padding: 10px;
  display: block;
  transition: all ease-in 0.2s;

  &:hover {
    color: tomato;
  }
`;

/**
 * 사이드바 컴포넌트
 * @param children 사이드바를 적용할 컴포넌트
 */
function Sidebar({ children }: { children: React.ReactNode }) {
  return <Aside>{children}</Aside>;
}

/**
 * 사이드바 타이틀 컴포넌트
 * @param children 사이드바 제목
 */
function SidebarTitle({ children }: { children: string }) {
  return <h1 style={{ padding: '0 10px', textAlign: 'center' }}>{children}</h1>;
}

/**
 * 뒤로가기 버튼
 * @param to 페이지 주소
 */
function SidebarBackButton({ to }: { to: string }) {
  return (
    <LinkBtn to={to}>
      <IoMdArrowRoundBack />
    </LinkBtn>
  );
}

export { SidebarTitle, SidebarBackButton };

export default Sidebar;
