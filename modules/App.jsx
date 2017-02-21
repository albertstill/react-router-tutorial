import React from 'react';
import htmlescape from 'htmlescape';
import { Route } from 'react-router-dom';
import NavLink from './NavLink';
import Home from './Home';
import Repos from './Repos';
import About from './About';

export default class extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { title: 0 };
  }

  componentWillMount() {
    if (this.props.initialProps) console.log('The props are here woop', this.props.initialProps);
  }

  componentDidMount() {
    setInterval(
      () => { this.setState({ title: Math.round(Math.random() * 100) / 100 }); },
      1000,
    );
  }

  render() {
    return (
      <html lang="en">
        <head>
          <title>{`${this.state.title} (no react-helmet needed)`}</title>
          <link rel="stylesheet" type="text/css" href="/index.css" />
        </head>
        <body>
          <h1>React Router Tutorial</h1>
          <ul>
            <li><NavLink to="/" exact>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/repos">Repos</NavLink></li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/repos" component={Repos} />


          {/* for mounting React with the server side props in the client */}
          <script
            dangerouslySetInnerHTML={{ __html: `window.reactData=${htmlescape(this.props.initialProps)}` }} // eslint-disable-line react/no-danger
          />
          <script src="/bundle.js" />
        </body>
      </html>
    );
  }
}
