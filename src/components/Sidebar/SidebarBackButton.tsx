import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
 * 뒤로가기 버튼
 * @param to 페이지 주소
 */
export function SidebarBackButton({ to }: { to: string }) {
  return (
    <LinkBtn to={to}>
      <IoMdArrowRoundBack />
    </LinkBtn>
  );
}
