import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { IProps } from './PrivateRouteContainer';

const PrivateRoute: React.SFC<IProps> = ({ isLoggedin, token, ...rest }) =>
  isLoggedin || token ? <Route {...rest} /> : <Redirect to="/login" />;

export default PrivateRoute;
