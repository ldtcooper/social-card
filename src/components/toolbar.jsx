import React from 'react';
import { SocialButton, MailButton} from './social_button.jsx';

const Toolbar = (props) => {
    return(
      <footer>
        <SocialButton id="comment" icon="fa fa-comment-o"/>
        <SocialButton id="retweet" icon="fa fa-retweet"/>
        <SocialButton id="like" icon="fa fa-heart-o"/>
        <MailButton id="mail" />
      </footer>
    );
  };

export default Toolbar;
