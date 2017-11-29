import React from 'react';

const Content = (props) => {
  return(
    <div className='content-box'>
      <p className='text-content'>{props.textContent}</p>
      {props.imageContent ? <img className='image-content' src={props.imageContent} alt="Content"/> : ""}
    </div>
  );
};

export default Content;
