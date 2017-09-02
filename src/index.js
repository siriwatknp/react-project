import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store/configureStore'
import routes from './routes';

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
const rootEl = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  rootEl
);

if(module.hot){
  module.hot.accept('./routes', () => {
    const nextRoutes = require('./routes').default
    ReactDOM.render(
      <Provider store={store}>
        <Router key={Math.random()} history={history} routes={nextRoutes} />
      </Provider>,
      rootEl
    );
  })
}
registerServiceWorker();