import React from 'react';
import Header from '../../components/Header';
import '../../styles/core.css';
import './CoreLayout.css';

export const CoreLayout = ({ children }) => (
  <div className="container text-center">
    <Header />
    <div className="core-layout__viewport">
      {children}
    </div>
  </div>
);

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default CoreLayout;
