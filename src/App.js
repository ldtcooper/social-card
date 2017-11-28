import React, { Component } from 'react';
import './App.css';
import SocialCard from './components/social_card.jsx';

class App extends Component {
  render() {
    return(
      <SocialCard avatarLink='https://upload.wikimedia.org/wikipedia/commons/0/00/William_Blake_by_Thomas_Phillips.jpg'
      username="William Blake"
      userHandle="@los"
      date="Nov 28"
      textContent="And did those feet in ancient time?"/>
    );
  }
}

export default App;
