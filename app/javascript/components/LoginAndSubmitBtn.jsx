import React from 'react';
import { Button } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';

const LoginAndSubmitBtn = ({ form }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [submitText, setSubmitText] = useState('Submit');

  useEffect(() => {
    fetch('/users/check_for_sign_in')
      .then(res => res.json())
      .then(res => {
        setIsLoggedIn(res.isLoggedIn);
        console.debug({ res })
        if (!res.isLoggedIn) setSubmitText('Login and Submit');
      })
  }, []);

  const onClickHandler = () => {
    if (!isLoggedIn) {
      localStorage.setItem('availabilityReport', JSON.stringify(form.getFieldsValue(true)));
      window.location.href = '/users/auth/twitter'
    } else {
      form.setFieldsValue(JSON.parse(localStorage.getItem('availabilityReport')));
      form.submit();
    }
  };

  return (
    <Button className="AvailabilityReport__submit-btn" type="primary" onClick={onClickHandler}>
      {submitText}
    </Button>
  )
};

export default LoginAndSubmitBtn;