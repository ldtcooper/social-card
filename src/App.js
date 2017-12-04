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
      <SocialCard />
    );
  }
}

export default App;
