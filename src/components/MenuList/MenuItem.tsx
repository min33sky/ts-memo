import React from 'react';
import { MenuItemWrapper } from './styles/MenuItemStyle';

interface MenuItemProps {
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
export default function MenuItem({ children, first, active }: MenuItemProps) {
  return (
    <MenuItemWrapper first={first} active={active}>
      {children}
    </MenuItemWrapper>
  );
}
