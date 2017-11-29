import React from 'react';

const Content = (props) => {
  return(
    <div className='content-box'>
      {props.imageContent ? <img className='image-content' src={props.imageContent} alt="Content"/> : ""}
    </div>
  );
};

export default Content;
