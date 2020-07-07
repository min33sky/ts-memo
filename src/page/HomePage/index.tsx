import React from 'react';
import Layout from '../../components/Layout';
import Sidebar, { SidebarTitle } from '../../components/Sidebar';
import { List, ListItem } from '../../components/List';
import Main from '../../components/Main';
import styled from 'styled-components';
import { ListItemButton } from '../../components/Button';
import Skeleton from '../../components/Skeleton';

export const Div = styled.div`
  margin: 10px;
`;

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
function HomePage({ memoNumber, deletedMemoNumber, loading }: HomePageProps) {
  /*
    저장된 메모 수와 삭제된 메모 수를 화면에 보여준다.
   */
  return (
    <Layout>
      <Sidebar>
        <SidebarTitle>메뉴</SidebarTitle>
        {loading ? (
          <List>
            <Skeleton />
          </List>
        ) : (
          <List>
            <ListItem first>
              <ListItemButton to='/memo'>메모({memoNumber})</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton to='/remove'>
                휴지통({deletedMemoNumber})
              </ListItemButton>
            </ListItem>
          </List>
        )}
      </Sidebar>
      <Main>Hi?</Main>
    </Layout>
  );
}

export default HomePage;
