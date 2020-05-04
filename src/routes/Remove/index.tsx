import React from 'react';
import {
  RouteComponentProps,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import RemoveMemoViewer from '../../page/RemovePage/RemoveMemoViewer';
import RemoveMain from '../../page/RemovePage/RemoveMain';
function TrashRouter({ match }: RouteComponentProps) {
  return (
    <Switch>
      <Route exact path={`${match.url}/:id`} component={RemoveMemoViewer} />
      <Route exact path={`${match.url}`} component={RemoveMain} />
    </Switch>
  );
}

export default withRouter(TrashRouter);
