import React from 'react';
import { SocialButton, MailButton} from './social_button.jsx';

const Toolbar = (props) => {
    return(
      <footer>
        <SocialButton icon="fa fa-comment-o"/>
        <SocialButton icon="fa fa-retweet"/>
        <SocialButton icon="fa fa-heart-o"/>
        <MailButton />
      </footer>
    );
  };

export default Toolbar;
