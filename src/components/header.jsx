import React, {Component} from 'react';
import UserInfo from './user_info.jsx';

class Header {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <header>
        <img src={this.props.avatarLink} alt={`${this.props.username}'s avatar'`}/>
        <UserInfo username={this.props.username} userHandle={this.props.userHandle} date={this.props.date}/>
      </header>
    );
  }
}
