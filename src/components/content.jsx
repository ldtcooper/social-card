import React from 'react';

const Content = (props) => {
  return(
    <div className='content-box'>
      <p className='text-content'>{props.textContent}</p>
      <img className='image-content' src={props.imageContent}/>
    </div>
  );
};

export default Content;
