import React from 'react';

import './errorMessage.css';
import errorImg from './error.jpg';

const ErrorMessage = () => {
  return (
    <>
      <img src={errorImg} alt='error'></img>
      <span>Something goes wrong</span>
    </>
  );
};

export default ErrorMessage;
