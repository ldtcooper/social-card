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
    xmlHttp.open('GET', `api.forismatic.com/api/1.0/method=getQuote&format=json&lang=en`, false);
    xmlHttp.send();
    console.log(xmlHttp.responseText);
  }

  render() {
    this.getTextContent();
    return(
      <SocialCard avatarLink='https://picsum.photos/100/100/?random'
      username="William Blake"
      userHandle="@los"
      date="Nov 28"
      textContent="Tyger Tyger, burning bright,
In the forests of the night;
What immortal hand or eye,
Could frame thy fearful symmetry?"
    />
    );
  }
}

export default App;
