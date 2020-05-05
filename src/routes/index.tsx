import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import RemovePage from '../page/RemovePage';
import { createGlobalStyle } from 'styled-components';
import MemoListContainer from '../containers/MemoListContainer';
import HomeContainer from '../containers/HomeContainer';

const GlobalStyle = createGlobalStyle`
  body {
    background: snow;
    margin: 0 auto;

  }


  a {
    text-decoration: none;
    color: black;
  }

`;

function Root() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route path='/memo' component={MemoListContainer} />
        <Route path='/remove' component={RemovePage} />
        <Redirect path='*' to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
