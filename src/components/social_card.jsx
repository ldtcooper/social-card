import React, {Component} from 'react';
import Header from './header.jsx';
import Toolbar from './toolbar.jsx';
import Content from './content.jsx';

class SocialCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="card">
        <Header
          avatarLink={this.props.avatarLink}
          username={this.props.username}
          userHandle={this.props.userHandle}
          date={this.props.date}
          textContent={this.props.textContent}
        />
      <Content
        imageContent={this.props.imageContent}
      />
        <Toolbar />
      </div>
    );
  }

}

export default SocialCard;
