import * as React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
`;

interface LiProps {
  first?: boolean;
}

const Li = styled.li<LiProps>`
  padding: 10px 10px;
  /* height: 2em; */
  border-bottom: 1px solid #ddd;
  border-top: ${(props) => (props.first ? '1px solid #ddd' : 'none')};
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-child(odd) {
    background: ghostwhite;
  }

  &:hover {
    background: turquoise;
  }
`;

interface ListProps {
  children: React.ReactNode;
}

function List({ children }: ListProps) {
  return <Ul>{children}</Ul>;
}

interface ListItemProps {
  children: React.ReactNode;
  first?: boolean;
}

function ListItem({ children, first }: ListItemProps) {
  return <Li first={first}>{children}</Li>;
}

export { List, ListItem };
