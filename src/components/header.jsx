import React, {Component} from 'react';
import UserInfo from './user_info.jsx';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      // takes avatarLink, username, userHandle, and date
      <header>
        <img src={this.props.avatarLink} alt={`${this.props.username}'s avatar'`}/>
        <div className='header-content-wrapper'>
          <UserInfo username={this.props.username} userHandle={this.props.userHandle} date={this.props.date}/>
          <p className='text-content'>{this.props.textContent}</p>
        </div>
      </header>
    );
  }
}

export default Header;
