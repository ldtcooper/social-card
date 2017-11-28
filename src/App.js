import React, { Component } from 'react';
import './App.css';
import SocialCard from './components/social_card.jsx';

class App extends Component {
  render() {
    return(
      <SocialCard avatarLink={this.props.avatarLink}
      username={this.props.username}
      userHandle={this.props.userHandle}
      date={this.props.date} />
    );
  }
}

export default App;
