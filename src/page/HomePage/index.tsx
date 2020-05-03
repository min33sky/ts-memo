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

function HomePage() {
  return (
    <Layout>
      <Sidebar>
        <SidebarTitle>폴더</SidebarTitle>
        <List>
          <ListItem first>
            <SideMemuButton to='/memo'>메모</SideMemuButton>
          </ListItem>
          <ListItem>
            <SideMemuButton to='/remove'>휴지통</SideMemuButton>
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
