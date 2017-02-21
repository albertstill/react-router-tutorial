import React from 'react';

export default function (props) {
  const { userName, repoName } = props.match.params;
  return (
    <div>
      <h2>{userName} / {repoName}</h2>
    </div>
  );
}
