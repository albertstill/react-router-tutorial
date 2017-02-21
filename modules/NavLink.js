// modules/NavLink.js
import React from 'react';
import { NavLink } from 'react-router-dom';

export default class extends React.Component {
  render() {
    return <NavLink {...this.props} activeClassName="active" />;
  }
}
