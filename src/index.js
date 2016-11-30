import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './containers/AppContainer';
import './styles/core.css';

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <AppContainer />,
  MOUNT_NODE
);
