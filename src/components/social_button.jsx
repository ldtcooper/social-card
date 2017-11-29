import React, {Component} from 'react';

export class SocialButton extends Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  render() {
    return(
      <div className="social-button" id={this.props.id}>
        <i className={[`fa ${this.props.icon}`, 'social-icon'].join(" ")} aria-hidden="true"></i>
        <p className='interaction-count'>3</p>
      </div>
    );
  }
}

export const MailButton = (props) => {
  return(
    <div className="social-button" id={props.id}>
      <i className="fa fa-envelope-o social-icon" aria-hidden="true"></i>
    </div>
  );
};
