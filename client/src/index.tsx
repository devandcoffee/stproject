import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App>Some content</App>, document.getElementById(
  'root',
) as HTMLElement);
registerServiceWorker();
