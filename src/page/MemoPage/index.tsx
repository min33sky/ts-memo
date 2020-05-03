import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { fetchMemoList } from '../../api';
import { List, ListItem } from '../../components/List';
import Layout from '../../components/Layout';
import Sidebar, {
  SidebarBackButton,
  SidebarTitle,
} from '../../components/Sidebar';
import Main from '../../components/Main';

interface Memo {
  id?: number;
  content: string;
  createdAt?: number;
}

function MemoPage({ match }: RouteComponentProps) {
  const [memos, setMemos] = useState<Memo[]>([]);

  useEffect(() => {
    // 메모 목록 가져오기
    fetchData();
  }, []);

  const fetchData = () => {
    const memos = fetchMemoList();
    setMemos(memos);
  };

  const renderMemoList = (memos: Memo[]) => (
    <List>
      {memos.map((memo, idx) => (
        <ListItem key={idx} first={idx === 0}>
          <Link to={`/memo/${memo.id}`}>{memoTitle(memo.content)}</Link>
        </ListItem>
      ))}
    </List>
  );

  const memoTitle = (content: string) => {
    return content.substr(0, 15);
  };
  return (
    <Layout>
      <Sidebar>
        <SidebarBackButton to='/' />
        <SidebarTitle>메모</SidebarTitle>
        {memos && renderMemoList(memos)}
      </Sidebar>
      <Main>{/* <MemoRouter /> */}</Main>
    </Layout>
  );
}

export default MemoPage;
