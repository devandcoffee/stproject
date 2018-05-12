import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './pages';

const Root: React.SFC = () => (
  <Router>
    <App />
  </Router>
);

export default Root;
