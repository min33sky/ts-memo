import React from 'react';
import {
  RouteComponentProps,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import TrashMemoViewer from '../../page/RemovePage/TrashMemoViewer';

function TrashRouter({ match }: RouteComponentProps) {
  return (
    <Switch>
      <Route exact path={`${match.url}/:id`} component={TrashMemoViewer} />
      <Route
        exact
        path={`${match.url}`}
        component={() => <div>휴지통 메인화면</div>}
      />
    </Switch>
  );
}

export default withRouter(TrashRouter);
