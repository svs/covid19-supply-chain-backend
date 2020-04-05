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
        if (!res.isLoggedIn) {
          setSubmitText('Login and Submit');
        } else {
          const values = JSON.parse(localStorage.getItem('availabilityReport'));
          form.setFieldsValue(values);
          const hasErrors = Object.values(form.getFieldsError()).some(({ errors }) => errors.length);
          // Note: this implementation assumes that if there are not errors on mount 
          // then the user has been redirected after login and has already filled form before submit
          // it avoids user having to click the submit button again. This flow is favorable at the moment 
          // than forcing user to login ever before he fills the form. hence login and submit buttons are combined to one
          if (!hasErrors) {
            form.submit();
          }
        }
      })
  }, []);

  const onClickHandler = () => {
    form.validateFields()
      .then(values => {
        if (!isLoggedIn) {
          localStorage.setItem('availabilityReport', JSON.stringify(form.getFieldsValue(true)));
          window.location.href = '/users/auth/twitter'
        } else {
          form.submit();
        }
    })
  };

  return (
    <Button className="AvailabilityReport__submit-btn" type="primary" onClick={onClickHandler}>
      {submitText}
    </Button>
  )
};

export default LoginAndSubmitBtn;