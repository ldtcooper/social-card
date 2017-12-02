import React, { Component } from 'react';
import './reset.css';
import './App.css';
import SocialCard from './components/social_card.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return(
      <SocialCard username="William Blake"
      userHandle="@los"
      textContent="Tyger Tyger, burning bright,
In the forests of the night;
What immortal hand or eye,
Could frame thy fearful symmetry?"
    />
    );
  }
}

export default App;
