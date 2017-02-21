// modules/NavLink.js
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function (props) {
  return <NavLink {...props} activeClassName="active" />;
}
