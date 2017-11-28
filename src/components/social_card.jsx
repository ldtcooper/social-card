import React, {Component} from 'react';
import Header from './header.jsx';

class SocialCard {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <body className="card">
        <Header
          avatarLink={this.props.avatarLink}
          username={this.props.username}
          userHandle={this.props.userHandle}
          date={this.props.date}
        />
      </body>
    );
  }

}

export default SocialCard;
