import React from 'react';
import Layout from '../../components/Layout';
import Sidebar, { SidebarTitle } from '../../components/Sidebar';
import { List, ListItem } from '../../components/List';
import { Link } from 'react-router-dom';
import Main from '../../components/Main';
import AddMemoButton from '../../components/AddMemoButton';
import styled from 'styled-components';

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
            <Link to='/memo'>메모</Link>
          </ListItem>
          <ListItem>
            <Link to='/remove'>휴지통</Link>
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
