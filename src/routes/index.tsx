import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import MemoListContainer from '../containers/MemoListContainer';
import HomeContainer from '../containers/HomeContainer';
import RemovedMemoListContainer from '../containers/RemovedMemoListContainer';

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
        <Route path='/remove' component={RemovedMemoListContainer} />
        <Redirect path='*' to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
