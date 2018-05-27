import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { Props } from './PrivateRouteContainer';

const PrivateRoute: React.SFC<Props> = ({ isLoggedin, token, ...rest }) =>
  isLoggedin || token ? <Route {...rest} /> : <Redirect to="/login" />;

export default PrivateRoute;
