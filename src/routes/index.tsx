import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../page/HomePage';
import MemoPage from '../page/MemoPage';
import RemovePage from '../page/RemovePage';

function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/memo' component={MemoPage} />
        <Route path='/remove' component={RemovePage} />
        <Redirect path='*' to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
