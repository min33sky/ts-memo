import React from 'react';
import Layout from '../../components/Layout';
import Sidebar, { SidebarTitle } from '../../components/Sidebar';
import { List, ListItem } from '../../components/List';
import { Link } from 'react-router-dom';
import Main from '../../components/Main';

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
            <Link to='/trash'>휴지통</Link>
          </ListItem>
        </List>
      </Sidebar>
      <Main>
        <Link to='memo/add'>새로운 메모</Link>
      </Main>
    </Layout>
  );
}

export default HomePage;
