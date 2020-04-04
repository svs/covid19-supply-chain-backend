import React from 'react';
import { Button } from 'antd';
import { useState } from 'react';

const LoginAndSubmitBtn = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [submitText, setSubmitText] = useState('Login and Submit');

  const onClickHandler = () => {
    setIsLoggingIn(true);
    setSubmitText('Waiting for login...')
  };

  return (
    <Button loading={isLoggingIn} className="AvailabilityReport__submit-btn" type="primary" onClick={onClickHandler}>
      {submitText}
    </Button>
  )
};

export default LoginAndSubmitBtn;