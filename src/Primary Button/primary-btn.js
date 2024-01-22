import './primary-btn.css'

import React from 'react';

const PrimaryBtn = ({ onClick, text, ariaHidden }) => {
  return (
    <button onClick={onClick} className='primary-btn' aria-hidden={ariaHidden}>
      {text}
    </button>
  );
}

export default PrimaryBtn;
