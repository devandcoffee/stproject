import * as React from 'react';
import { RouteProps } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import { isLoggedIn, getToken } from '../../auth';

export interface IProps extends RouteProps {
  isLoggedin: boolean | null;
  token: string | null;
}

class PrivateRouteContainer extends React.Component<RouteProps> {
  state = {
    isLoggedIn: isLoggedIn(),
    token: getToken(),
  };

  render() {
    const { token } = this.state;

    return (
      <PrivateRoute
        isLoggedin={this.state.isLoggedIn}
        token={token}
        {...this.props}
      />
    );
  }
}
export default PrivateRouteContainer;
