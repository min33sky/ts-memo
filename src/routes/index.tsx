import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import MemoListContainer from '../containers/MemoListContainer';
import HomeContainer from '../containers/HomeContainer';
import RemovedMemoListContainer from '../containers/RemovedMemoListContainer';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store/configureStore';

/**
 * Styled-Components에서 제공하는 글로벌 CSS 설정
 */
const GlobalStyle = createGlobalStyle`

  body {
    background-color: darkslateblue;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
    color: black;
  }

`;

/**
 * 앱의 시작 컴포넌트
 */
function Root() {
  /*
    ! Connected-react-router를 사용할 땐 BrowserRouter 사용을 금한다.
   */
  return (
    <ConnectedRouter history={history}>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route path='/memo' component={MemoListContainer} />
        <Route path='/remove' component={RemovedMemoListContainer} />
        <Redirect path='*' to='/' />
      </Switch>
    </ConnectedRouter>
  );
}

export default Root;
