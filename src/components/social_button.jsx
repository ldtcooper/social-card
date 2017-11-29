import React, {Component} from 'react';

export class SocialButton extends Component {
  constructor(props) {
    super(props);
    this.state={clicks: Math.floor(50 * Math.random())};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const elemId = e.target.parentElement.getAttribute("id");
    console.log(e.target);
    if (elemId.match(/-clicked/)) {
      const unclicked = elemId.split("-")[0];
      this.setState({clicks: this.state.clicks - 1});
      e.target.parentElement.setAttribute("id", `${unclicked}`);
    } else {
      this.setState({clicks: this.state.clicks + 1});
      e.target.parentElement.setAttribute("id", `${elemId}-clicked`);
    }
  }

  render() {
    return(
      <div className="social-button" id={this.props.id} onClick={this.handleClick}>
        <i className={[`fa ${this.props.icon}`, 'social-icon'].join(" ")} aria-hidden="true"></i>
        <p className='interaction-count'>{this.state.clicks}</p>
      </div>
    );
  }
}

export class MailButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const elemId = e.target.parentElement.getAttribute("id");
    if (elemId === "mail") {
      e.target.parentElement.setAttribute("id", "mail-clicked");
    } else {
      e.target.parentElement.setAttribute("id", "mail");
    }
  }

  render() {
    return(
      <div className="social-button" id={this.props.id} onClick={this.handleClick}>
        <i className="fa fa-envelope-o social-icon" aria-hidden="true"></i>
      </div>
    );
  }
}
