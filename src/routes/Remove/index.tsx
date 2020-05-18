import React from 'react';
import {
  RouteComponentProps,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import RemoveMain from '../../page/RemovePage/RemoveMain';
import RemovedMemoContainer from '../../containers/RemovedMemoContainer';
function TrashRouter({ match }: RouteComponentProps) {
  return (
    <Switch>
      <Route exact path={`${match.url}/:id`} component={RemovedMemoContainer} />
      <Route exact path={`${match.url}`} component={RemoveMain} />
    </Switch>
  );
}

export default withRouter(TrashRouter);
