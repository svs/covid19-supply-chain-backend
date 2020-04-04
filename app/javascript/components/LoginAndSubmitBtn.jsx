import React from 'react';
import { Button } from 'antd';
import { useState } from 'react';

const LoginAndSubmitBtn = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [submitText, setSubmitText] = useState('Login and Submit');

  const onClickHandler = () => {
    setIsLoggingIn(true);
    setSubmitText('Waiting for login...');
    window.open('/user/auth/twitter', 'signup', 'toolbar=no, menubar=no, width=500, height=800, top=100, left=100');
  };

  return (
    <Button loading={isLoggingIn} className="AvailabilityReport__submit-btn" type="primary" onClick={onClickHandler}>
      {submitText}
    </Button>
  )
};

export default LoginAndSubmitBtn;