import React, { Component } from 'react';
import './reset.css';
import './App.css';
import SocialCard from './components/social_card.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  getTextContent() {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', `api.forismatic.com/api/1.0/method=getQuote&format=json&lang=en`);
    xmlHttp.send();
    console.log(xmlHttp.responseText);
  }

  render() {
    this.getTextContent();
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
