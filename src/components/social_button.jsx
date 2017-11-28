import React from 'react';

export const SocialButton = (props) => {
  return(
    <div className="social-button">
      <i className={[`fa ${props.icon}`, 'social-icon'].join(" ")} aria-hidden="true"></i>
      <p className='interaction-count'>3</p>
    </div>
  );
};

export const MailButton = () => {
  return(
    <div className="social-button">
      <i className="fa fa-envelope-o social-icon" aria-hidden="true"></i>
    </div>
  );
};
