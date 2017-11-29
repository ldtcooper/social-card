import React, {Component} from 'react';
import UserInfo from './user_info.jsx';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {date: null};
  }

  componentWillMount() {
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

  render() {
    return(
      // takes avatarLink, username, userHandle, and date
      <header>
        <img src='https://picsum.photos/100/100/?random' alt={`${this.props.username}'s avatar'`}/>
        <div className='header-content-wrapper'>
          <UserInfo username={this.props.username} userHandle={this.props.userHandle} date={this.state.date}/>
          <p className='text-content'>{this.props.textContent}</p>
        </div>
      </header>
    );
  }
}

export default Header;
