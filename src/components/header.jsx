import React, {Component} from 'react';

class Header {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <header>
        <img src={this.props.avatarLink} alt={`${this.props.username}'s avatar'`}/>

      </header>
    );
  }
}
