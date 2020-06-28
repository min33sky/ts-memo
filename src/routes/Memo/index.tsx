import React from 'react';
import {
  RouteComponentProps,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import AddMemoContainer from '../../containers/AddMemoContainer';
import MemoContainer from '../../containers/MemoContainer';
import MemoMain from '../../components/MemoMain';

/**
 * 메모 라추터
 * - 메모와 관련된 내용을 보여주는 서브 라우터
 */
function MemoRouter({ match }: RouteComponentProps) {
  return (
    <Switch>
      <Route exact path={`${match.url}/add`} component={AddMemoContainer} />
      <Route exact path={`${match.url}/:id`} component={MemoContainer} />
      <Route exact path={`${match.url}`} component={MemoMain} />
    </Switch>
  );
}

export default withRouter(MemoRouter);
