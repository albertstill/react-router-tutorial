require('babel-register')({
  only: /(server.jsx|modules)/,
  presets: ['es2015', 'react'],
  extensions: ['.jsx'],
});
const express = require('express');
const path = require('path');
const compression = require('compression');
const ReactDOMServer = require('react-dom/server');
const appToRender = require('./server.jsx');

const app = express();

app.use(compression());

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public'), { index: false }));

const PROPS = { answer: 42 };

// send all requests to index.html so browserHistory works
app.get('*', (req, res) => {
  const context = {};

  const html = ReactDOMServer.renderToString(
    appToRender(req.url, context, PROPS)
  );

  // context.url will contain the URL to redirect to if a <Redirect> was used
  if (context.url) {
    res.writeHead(
      302,
      { Location: context.url }
    );
    res.end();
  } else {
    res.send(`<!doctype html>${html}`);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Production Express server running at localhost:${PORT}`);
});
