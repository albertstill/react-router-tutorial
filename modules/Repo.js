import React from 'react';

export default React.createClass({
  render() {
    const { userName, repoName } = this.props.match.params;
    return (
      <div>
        <h2>{userName} / {repoName}</h2>
      </div>
    );
  },
});
