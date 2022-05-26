import React from 'react';
import ReactDOM from 'react-dom';

import Application from './Application';

import './index.css';

import store from './storeWithEnhancer';

store.dispatch({ type: 'Hello' });

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root')
);
