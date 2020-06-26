import React from 'react';
import { Memo } from '../../model';
import Layout from '../../components/Layout';
import Sidebar, {
  SidebarBackButton,
  SidebarTitle,
} from '../../components/Sidebar';
import Main from '../../components/Main';
import MemoRouter from '../../routes/Memo';
import { List, ListItem } from '../../components/List';
import { SideMemuButton } from '../../components/Button';
import AddMemoButton from '../../components/AddMemoButton';
import { useLocation } from 'react-router-dom';

interface MemoListPageProps {
  memos: Memo[];
}

function MemoListPage({ memos }: MemoListPageProps) {
  return (
    <Layout>
      <Sidebar>
        <SidebarBackButton to='/' />
        <SidebarTitle>메모</SidebarTitle>
        {memos.length > 0 && <MemoList memos={memos} />}
      </Sidebar>
      <Main>
        <AddMemoButton />
        <MemoRouter />
      </Main>
    </Layout>
  );
}

function MemoList({ memos }: MemoListPageProps) {
  const memoTitle = (content: string) => content.substr(0, 15);
  const location = useLocation();

  /*
    TODO : 현재 보고 있는 페이지와 같은 리스트 제목에 효과를 주자
    memo.id와 현재 주소와 같다면 처리해주자
   */

  const currentPageNo = location.pathname.split('').reverse()[0];

  console.log('ㅎㅎㅎㅎ', currentPageNo);
  return (
    <List>
      {memos.map((memo, idx) => (
        <ListItem key={idx} first={idx === 0}>
          <SideMemuButton to={`/memo/${memo.id}`}>
            {memoTitle(memo.content)}
          </SideMemuButton>
        </ListItem>
      ))}
    </List>
  );
}

export default MemoListPage;
