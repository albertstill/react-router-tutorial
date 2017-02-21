import React from 'react'
import NavLink from './NavLink'
import Home from './Home'
import Repos from './Repos'
import About from './About'
import htmlescape from 'htmlescape'
import { BrowserRouter, Route } from 'react-router-dom'

export default React.createClass({
  getInitialState() {
    return { title: 0 };
  },

  componentWillMount() {
    this.props.initialProps && console.log('The props are here woop', this.props.initialProps);
  },

  componentDidMount() {
    setInterval(
      () => { this.setState({ title: Math.round(Math.random() * 100) / 100 }); },
      1000
    );
  },

  render() {
    return (
      <html>
        <head>
          <title>{`${this.state.title} (no react-helmet needed)`}</title>
        </head>
        <body>
          <h1>React Router Tutorial</h1>
          <ul role="nav">
            <li><NavLink to="/" exact>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/repos">Repos</NavLink></li>
          </ul>

          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route path="/repos" component={Repos} />


          {/* for mounting React with the server side props in the client */}
          <script
            dangerouslySetInnerHTML={
              { __html: `window.reactData=${htmlescape(this.props.initialProps)}` }
            }
          />
          <script src="/bundle.js"></script>
        </body>
      </html>
    )
  }
})
