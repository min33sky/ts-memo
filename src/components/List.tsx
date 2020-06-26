import * as React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
`;

interface LiProps {
  first?: boolean;
}

/*
  ? styled-components에서 HTML ELEMENT에 props를 추가해서 스타일링 하기
 */
const ListItemWrapper = styled.li<LiProps>`
  padding: 5px 10px;
  height: 2em;
  border-bottom: 1px solid #ddd;
  border-top: ${(props) => (props.first ? '1px solid #ddd' : 'none')};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s all;

  &:nth-child(odd) {
    background-color: ghostwhite;
  }

  &:hover {
    background-color: turquoise;
  }
`;

/**
 * 메모 리스트 컴포넌트
 * @param children 메모 목록
 */
function List({ children }: { children: React.ReactNode }) {
  return <Ul>{children}</Ul>;
}

interface ListItemProps {
  children: React.ReactNode;
  first?: boolean;
}

/**
 * 메모 리스트에서 사용되는 메모 제목을 보여주는 컴포넌트
 * @param children 제목
 * @param first 첫 번째 메모
 */
function ListItem({ children, first }: ListItemProps) {
  return <ListItemWrapper first={first}>{children}</ListItemWrapper>;
}

export { List, ListItem };
