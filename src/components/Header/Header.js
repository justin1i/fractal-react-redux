import React from 'react';
import { IndexLink, Link } from 'react-router';
import './Header.css';

export default () => (
  <div>
    <h1>Fractal React Redux</h1>
    <IndexLink to="/" activeClassName="route--active">Home</IndexLink>
    {' . '}
    <Link to="/counter" activeClassName="route--active">Counter</Link>
  </div>
);
