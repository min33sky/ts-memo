import * as React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.ul`
  list-style: none;
  padding-left: 0;
`;

interface ListItemWrapperProps {
  first?: boolean;
  active?: boolean;
}

/*
  ? styled-components에서 HTML ELEMENT에 props를 추가해서 스타일링 하기
 */
const ListItemWrapper = styled.li<ListItemWrapperProps>`
  /* padding: 5px 10px; */
  padding: 0;
  height: 3em;
  border-bottom: 1px solid #ddd;
  border-top: ${(props) => {
    return props.first ? '1px solid #ddd' : 'none';
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s all;

  background-color: ${(props) => {
    // ? !important - 홀수 아이템에도 색깔을 강제 적용한다.
    return props.active ? 'pink !important' : 'white';
  }};

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
  return <ListWrapper>{children}</ListWrapper>;
}

interface ListItemProps {
  children: React.ReactNode;
  first?: boolean;
  active?: boolean;
}

/**
 * 메모 리스트에서 사용되는 메모 제목을 보여주는 컴포넌트
 * @param children 제목
 * @param first 첫 번째 메모
 * @param active 현재 보여주는 메모
 */
function ListItem({ children, first, active }: ListItemProps) {
  return (
    <ListItemWrapper first={first} active={active}>
      {children}
    </ListItemWrapper>
  );
}

export { List, ListItem };
