import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/createStore';
import createRoutes from './routes';
import AppContainer from './containers/AppContainer';

const MOUNT_NODE = document.getElementById('root');

const store = createStore();
const routes = createRoutes(store);

ReactDOM.render(
  <AppContainer store={store} routes={routes} />,
  MOUNT_NODE
);
