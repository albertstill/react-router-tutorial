import React from 'react'
import NavLink from './NavLink'
import Home from './Home'
import Repos from './Repos'
import About from './About'
import { BrowserRouter, Route } from 'react-router-dom'

export default React.createClass({
  render() {
    console.log(this.props.foo);
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/" exact>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>

        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route path="/repos" component={Repos} />
      </div>
    )
  }
})
