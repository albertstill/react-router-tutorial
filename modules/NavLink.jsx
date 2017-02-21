// modules/NavLink.js
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function () {
  return <NavLink {...this.props} activeClassName="active" />;
}
