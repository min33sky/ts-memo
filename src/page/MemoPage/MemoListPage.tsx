import React from 'react';
import { Memo } from '../../model';
import Sidebar from '../../components/Sidebar';
import Main from '../../components/Main';
import MemoRouter from '../../routes/Memo';
import { ListItemButton } from '../../components/Button';
import { useLocation } from 'react-router-dom';
import AppLayout from 'components/AppLayout';
import { SidebarBackButton } from 'components/Sidebar/SidebarBackButton';
import SidebarTitle from 'components/Sidebar/SidebarTitle';
import MenuList from 'components/MenuList';
import MenuItem from 'components/MenuList/MenuItem';

interface MemoListPageProps {
  memos: Memo[];
}

/**
 * 메모 목록을 보여주는 페이지
 * - url: /memo
 * @param memos 메모 리스트
 */
function MemoListPage({ memos }: MemoListPageProps) {
  return (
    <AppLayout>
      <Sidebar>
        <SidebarBackButton to="/" />
        <SidebarTitle>메모</SidebarTitle>
        {memos.length > 0 && <MemoList memos={memos} />}
      </Sidebar>
      <Main>
        <MemoRouter />
      </Main>
    </AppLayout>
  );
}

/**
 * 메모 리스트를 사이드에 출력하는 컴포넌트
 * @param param0 메모 리스트
 */
function MemoList({ memos }: MemoListPageProps) {
  const memoTitle = (content: string) => content.substr(0, 15);
  const location = useLocation();

  const currentPageNo = Number(location.pathname.split('/').reverse()[0]);

  return (
    <MenuList>
      {memos.map((memo, idx) => (
        <MenuItem key={idx} first={idx === 0} active={memo.id === currentPageNo}>
          <ListItemButton to={`/memo/${memo.id}`}>{memoTitle(memo.content)}</ListItemButton>
        </MenuItem>
      ))}
    </MenuList>
  );
}

export default MemoListPage;
