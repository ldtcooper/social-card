import React from 'react';

export const userInfo = (props) => {
  return(
    <div className="header-info">
      <p className="user-name">{props.username}</p>
      <p className="user-handle">{props.userHandle} - </p>
      <p className="post-date">{props.date}</p>
    </div>
  );
};
