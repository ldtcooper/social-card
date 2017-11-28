import React, { Component } from 'react';
import '.reset.css';
import './App.css';
import SocialCard from './components/social_card.jsx';

class App extends Component {
  render() {
    return(
      <SocialCard avatarLink='https://upload.wikimedia.org/wikipedia/commons/0/00/William_Blake_by_Thomas_Phillips.jpg'
      username="William Blake"
      userHandle="@los"
      date="Nov 28"
      textContent="Tyger Tyger, burning bright,
In the forests of the night;
What immortal hand or eye,
Could frame thy fearful symmetry?"
      imageContent="https://upload.wikimedia.org/wikipedia/commons/9/91/The_Tyger_BM_a_1794.jpg"/>
    );
  }
}

export default App;
