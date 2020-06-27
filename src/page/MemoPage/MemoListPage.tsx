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

  const currentPageNo = Number(location.pathname.split('/').reverse()[0]);

  return (
    <List>
      {memos.map((memo, idx) => (
        <ListItem
          key={idx}
          first={idx === 0}
          active={memo.id === currentPageNo}
        >
          <SideMemuButton to={`/memo/${memo.id}`}>
            {memoTitle(memo.content)}
          </SideMemuButton>
        </ListItem>
      ))}
    </List>
  );
}

export default MemoListPage;
