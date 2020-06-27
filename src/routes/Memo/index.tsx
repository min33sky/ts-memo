import React from 'react';
import {
  RouteComponentProps,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import AddMemoContainer from '../../containers/AddMemoContainer';
import MemoContainer from '../../containers/MemoContainer';

function MemoRouter({ match }: RouteComponentProps) {
  return (
    <Switch>
      <Route exact path={`${match.url}/add`} component={AddMemoContainer} />
      <Route exact path={`${match.url}/:id`} component={MemoContainer} />
      <Route
        exact
        path={`${match.url}`}
        component={() => <div>새로운 메모를 작성하세요 ^_^</div>}
      />
    </Switch>
  );
}

export default withRouter(MemoRouter);
