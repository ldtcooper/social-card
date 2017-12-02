import React, {Component} from 'react';
import UserInfo from './user_info.jsx';
import fetchJsonp from 'fetch-jsonp';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      username: null,
      userHandle: null,
      textContent: null
    };
  }

  getDate() {
    const d = new Date();
    let month;
    switch (d.getMonth()) {
      case 0:
        month = "Jan";
        break;
      case 1:
        month = "Feb";
        break;
      case 2:
        month = "Mar";
        break;
      case 3:
        month = "Apr";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "Jun";
        break;
      case 6:
        month = "Jul";
        break;
      case 7:
        month = "Aug";
        break;
      case 8:
        month = "Sep";
        break;
      case 9:
        month = "Oct";
        break;
      case 10:
        month = "Nov";
        break;
      case 11:
        month = "Dec";
        break;
    }
    const dd = d.getDate();
    this.setState({date: `${month} ${dd}`});
  }

  getText() {
    fetchJsonp('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en', {
      jsonpCallback: 'jsonp',
      jsonpCallbackFunction: 'jsonpFunc'
    }).then(
      (response) => {
        return response.json();
      }).then((data) => {
      // this.makeHandle(data.quoteAuthor);
      this.setState({username: data.quoteAuthor, textContent: data.quoteText});
    });
  }

  // makeHandle(name) {
  //   const randNum1 = Math.floor(Math.random() * 10) + 1;
  //   const randNum2 = Math.floor(Math.random() * 10) + 1;
  //   const firstInitial = name[0].toLowerCase;
  //   const lastName = name.split(" ").slice(-1)[0].toLowerCase();
  //   this.setState({userHande: `${firstInitial}${lastName}${randNum1}${randNum2}`});
  // }

  componentWillMount() {
    this.getDate();
    this.getText();
  }

  render() {
    return(
      // takes avatarLink, username, userHandle, and date
      <header>
        <img src='https://picsum.photos/100/100/?random' alt={`${this.props.username}'s avatar'`}/>
        <div className='header-content-wrapper'>
          <UserInfo username={this.state.username} userHandle={this.state.userHandle} date={this.state.date}/>
          <p className='text-content'>{this.state.textContent}</p>
        </div>
      </header>
    );
  }
}

export default Header;
