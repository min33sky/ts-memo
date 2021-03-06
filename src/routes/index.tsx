import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import MemoListContainer from 'containers/MemoListContainer';
import HomeContainer from 'containers/HomeContainer';
import RemovedMemoListContainer from 'containers/RemovedMemoListContainer';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'store/configureStore';

/**
 * Styled-Components에서 제공하는 글로벌 CSS 설정
 */
const GlobalStyle = createGlobalStyle`

  body {
    background-color: forestgreen;
    margin: 0;
    box-sizing: border-box;
  }

  div#root {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: black;
  }

`;

/**
 * 앱의 시작 컴포넌트
 *! Connected-react-router를 사용할 땐 BrowserRouter 사용을 금한다.
 */
function Root() {
  return (
    <ConnectedRouter history={history}>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/memo" component={MemoListContainer} />
        <Route path="/remove" component={RemovedMemoListContainer} />
        <Redirect path="*" to="/" />
      </Switch>
    </ConnectedRouter>
  );
}

export default Root;
