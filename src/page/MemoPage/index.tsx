import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { fetchMemoList } from '../../api';
import { List, ListItem } from '../../components/List';
import Layout from '../../components/Layout';
import Sidebar, {
  SidebarBackButton,
  SidebarTitle,
} from '../../components/Sidebar';
import Main from '../../components/Main';
import MemoRouter from '../../routes/Memo';
import { ListItemButton } from '../../components/Button';

interface Memo {
  id?: number;
  content: string;
  createdAt?: number;
}

function MemoPage({ location }: RouteComponentProps) {
  const [memos, setMemos] = useState<Memo[]>([]);

  useEffect(() => {
    fetchData();
    // 주소가 바뀌면 메모를 다시 불러온다
  }, [location.pathname]);

  // 메모 목록 가져오기
  const fetchData = () => {
    const memos = fetchMemoList();
    setMemos(memos);
  };

  /**
   * 메모 목록을 출력하는 함수
   * @param memos 저장된 메모들
   */
  const renderMemoList = (memos: Memo[]) => (
    <List>
      {memos.map((memo, idx) => (
        <ListItem key={idx} first={idx === 0}>
          <ListItemButton to={`/memo/${memo.id}`}>
            {memoTitle(memo.content)}
          </ListItemButton>
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
        {memos.length > 0 && renderMemoList(memos)}
      </Sidebar>
      <Main>
        <MemoRouter />
      </Main>
    </Layout>
  );
}

export default MemoPage;
