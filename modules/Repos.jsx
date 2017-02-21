import React from 'react';
import { Route } from 'react-router-dom';
import NavLink from './NavLink';
import Repo from './Repo';

class Repos extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.elements[0].value;
    const repo = event.target.elements[1].value;
    const path = `/repos/${userName}/${repo}`;
    this.context.router.push(path);
  }

  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/reactjs/react-router-dom">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName" /> / {' '}
              <input type="text" placeholder="repo" />{' '}
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>
        <Route exact path="/repos/:userName/:repoName" component={Repo} />
      </div>
    );
  }
}

Repos.contextTypes = {
  router: React.PropTypes.object,
};

export default Repos;
