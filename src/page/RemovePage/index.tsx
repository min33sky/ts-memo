import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Sidebar, {
  SidebarBackButton,
  SidebarTitle,
} from '../../components/Sidebar';
import Main from '../../components/Main';
import { Memo } from '../../model';
import { fetchDeletedMemoList } from '../../api';
import { List, ListItem } from '../../components/List';
import { Link } from 'react-router-dom';
import TrashRouter from '../../routes/Remove';

function RemovePage() {
  const [memos, setMemos] = useState<Memo[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const data = fetchDeletedMemoList();
    setMemos(data);
  };

  const memoTitle = (content: string) => {
    return content.substr(0, 15);
  };

  const renderMemoList = (memo: Memo[]) => (
    <List>
      {memos.map((memo, idx) => (
        <ListItem key={idx} first={idx === 0}>
          <Link to={`/trash/${memo.id}`}>{memoTitle(memo.content)}</Link>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Layout>
      <Sidebar>
        <SidebarBackButton to='/' />
        <SidebarTitle>휴지통</SidebarTitle>
        {memos && renderMemoList(memos)}
      </Sidebar>
      <Main>
        <TrashRouter />
      </Main>
    </Layout>
  );
}

export default RemovePage;
