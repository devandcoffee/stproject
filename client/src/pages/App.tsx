import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { App, PrivateRoute } from '../components/';

import { Tournaments } from './Tournaments';
import { Teams } from './Teams';
import Login from './Login/Login';

import * as paths from './paths';

const DefaultPath = () => <Redirect to={paths.TOURNAMENTS_PATH} />;

const AppPage: React.SFC = () => (
  <App>
    <Switch>
      <Route exact={true} path={paths.LOGIN} component={Login} />

      <PrivateRoute
        exact={true}
        path={paths.TOURNAMENTS_PATH}
        component={Tournaments}
      />
      <PrivateRoute exact={true} path={paths.TEAMS_PATH} component={Teams} />
      <PrivateRoute render={DefaultPath} />
    </Switch>
  </App>
);

export default AppPage;
