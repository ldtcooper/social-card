import React, {Component} from 'react';
import Header from './header.jsx';
import Toolbar from './toolbar.jsx';

class SocialCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <body className="card">
        <Header
          avatarLink={this.props.avatarLink}
          username={this.props.username}
          userHandle={this.props.userHandle}
          date={this.props.date}
        />
        <Toolbar />
      </body>
    );
  }

}

export default SocialCard;
