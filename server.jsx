import React from 'react';
import { StaticRouter } from 'react-router-dom';
import App from './modules/App';

module.exports = function renderJsx(url, context, props) {
  return (
    <StaticRouter location={url} context={context}>
      <App initialProps={props} />
    </StaticRouter>
  );
};
