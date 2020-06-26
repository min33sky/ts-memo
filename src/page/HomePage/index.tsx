import React from 'react';
import Layout from '../../components/Layout';
import Sidebar, { SidebarTitle } from '../../components/Sidebar';
import { List, ListItem } from '../../components/List';
import Main from '../../components/Main';
import AddMemoButton from '../../components/AddMemoButton';
import styled from 'styled-components';
import { SideMemuButton } from '../../components/Button';

export const Div = styled.div`
  margin: 10px;
`;

interface HomePageProps {
  memoNumber: number;
  deletedMemoNumber: number;
}

/**
 * 시작 페이지
 * @param memoNumber 메모 수
 * @param deletedMemoNumber 삭제된 메모 수
 */
function HomePage({ memoNumber, deletedMemoNumber }: HomePageProps) {
  return (
    <Layout>
      <Sidebar>
        <SidebarTitle>폴더</SidebarTitle>
        <List>
          <ListItem first>
            <SideMemuButton to='/memo'>메모({memoNumber})</SideMemuButton>
          </ListItem>
          <ListItem>
            <SideMemuButton to='/remove'>
              휴지통({deletedMemoNumber})
            </SideMemuButton>
          </ListItem>
        </List>
      </Sidebar>
      <Main>
        <AddMemoButton />
      </Main>
    </Layout>
  );
}

export default HomePage;
