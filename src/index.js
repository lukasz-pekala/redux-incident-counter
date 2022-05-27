import React from 'react';
import ReactDOM from 'react-dom';

import Application from './Application';

import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';

// import store from './storeWithEnhancer';
// import perfStore from './performanceMiddleware';
//
// store.dispatch({ type: 'Hello' });
// perfStore.dispatch({ type: 'Hello' });

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Application />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
