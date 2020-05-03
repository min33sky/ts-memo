import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../page/HomePage';
import MemoPage from '../page/MemoPage';

function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/memo' component={MemoPage} />
        <Redirect path='*' to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
