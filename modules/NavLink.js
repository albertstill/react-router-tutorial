// modules/NavLink.js
import React from 'react';
import { NavLink } from 'react-router-dom';

export default React.createClass({
  render() {
    return <NavLink {...this.props} activeClassName="active" />;
  },
});
