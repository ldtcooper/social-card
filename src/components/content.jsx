import React from 'react';

const Content = (props) => {
  return(
    <div className='content-box'>
      <p className='text-content'>{props.textContent}</p>
      <div className='image-content-wrapper'>
        <img className='image-content' src={props.imageContent} alt="Content"/>
      </div>
    </div>
  );
};

export default Content;
