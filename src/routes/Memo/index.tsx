import React from 'react';
import {
  RouteComponentProps,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import MemoViewer from '../../page/MemoPage/MemoViewer';
import AddMemo from '../../page/MemoPage/AddMemo';

function MemoRouter({ match }: RouteComponentProps) {
  return (
    <Switch>
      <Route exact path={`${match.url}/add`} component={AddMemo} />
      <Route exact path={`${match.url}/:id`} component={MemoViewer} />
      <Route
        exact
        path={`${match.url}`}
        component={() => <div>새로운 메모를 만들어 보세요.</div>}
      />
    </Switch>
  );
}

export default withRouter(MemoRouter);