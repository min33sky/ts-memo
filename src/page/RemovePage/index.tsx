import React from 'react';
import Sidebar from 'components/Sidebar';
import Main from 'components/Main';
import { Memo } from 'model';
import TrashRouter from 'routes/Remove';
import { ListItemButton } from 'components/Button';
import { useLocation } from 'react-router-dom';
import AppLayout from 'components/AppLayout';
import { SidebarBackButton } from 'components/Sidebar/SidebarBackButton';
import SidebarTitle from 'components/Sidebar/SidebarTitle';
import MenuList from 'components/MenuList';
import MenuItem from 'components/MenuList/MenuItem';

interface RemovePageProps {
  memos: Memo[];
}

/**
 * 휴지통 페이지
 * - URL: /remove
 * @param memos 삭제된 메모들
 */
function RemovePage({ memos }: RemovePageProps) {
  // 긴 제목은 일부분만 보여준다.
  const memoTitle = (content: string) => {
    return content.substr(0, 15);
  };

  const location = useLocation();

  const currentPageNo = Number(location.pathname.split('/').reverse()[0]);

  const renderMemoList = (memos: Memo[]) => (
    <MenuList>
      {memos.map((memo, idx) => (
        <MenuItem key={idx} first={idx === 0} active={memo.id === currentPageNo}>
          <ListItemButton to={`/remove/${memo.id}`}>{memoTitle(memo.content)}</ListItemButton>
        </MenuItem>
      ))}
    </MenuList>
  );

  return (
    <AppLayout>
      <Sidebar>
        <SidebarBackButton to="/" />
        <SidebarTitle>휴지통</SidebarTitle>
        {memos && renderMemoList(memos)}
      </Sidebar>

      <Main>
        <TrashRouter />
      </Main>
    </AppLayout>
  );
}

export default RemovePage;
