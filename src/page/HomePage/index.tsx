import React from 'react';
import Sidebar from '../../components/Sidebar';
import Main from '../../components/Main';
import { ListItemButton } from '../../components/Button';
import Skeleton from 'components/Skeleton';
import AppLayout from 'components/AppLayout';
import SidebarTitle from 'components/Sidebar/SidebarTitle';
import MenuList from 'components/MenuList';
import MenuItem from 'components/MenuList/MenuItem';

interface HomePageProps {
  memoNumber: number;
  deletedMemoNumber: number;
  loading?: boolean;
}

/**
 * 시작 페이지
 * @param memoNumber 메모 수
 * @param deletedMemoNumber 삭제된 메모 수
 * @param loading 데이터가 로딩중인지 알려준다.
 */
export default function HomePage({ memoNumber, deletedMemoNumber, loading }: HomePageProps) {
  /*
    저장된 메모 수와 삭제된 메모 수를 화면에 보여준다.
   */
  return (
    <AppLayout>
      <Sidebar>
        <SidebarTitle>메뉴</SidebarTitle>
        {loading && (
          <MenuList>
            <Skeleton />
          </MenuList>
        )}

        {!loading && (
          <MenuList>
            <MenuItem first>
              <ListItemButton to="/memo">메모({memoNumber})</ListItemButton>
            </MenuItem>
            <MenuItem>
              <ListItemButton to="/remove">휴지통({deletedMemoNumber})</ListItemButton>
            </MenuItem>
          </MenuList>
        )}
      </Sidebar>

      <Main>
        <h1>Hello, Typescript Memopad</h1>
      </Main>
    </AppLayout>
  );
}
