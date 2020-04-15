import React from 'react';
import { message, Button } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';

const LoginAndSubmitBtn = ({ form }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch('/users/check_for_sign_in')
      .then(res => res.json())
      .then(res => {
        setIsLoggedIn(res.isLoggedIn);
        if (res.isLoggedIn) {
          const values = JSON.parse(localStorage.getItem('availabilityReport'));
          if (values) {
            if (values.availabilities_attributes.filter(attr => attr.item_id).length)
              form.setFieldsValue(values)
            else {
              const { availabilities_attributes, ...rest } = values;
              form.setFieldsValue(rest);
            }

          }
          const isPageRedirectedFromLogin = !!form.getFieldValue('store_name');
          // Note: this implementation assumes that if store name is not undefined on mount 
          // then the user has been redirected after login and has already filled form before submit
          // So it scrolls user to submit button
          if (isPageRedirectedFromLogin) {
            window.scrollTo(0, document.body.scrollHeight)          }
        }
      })
  }, []);

  const onLoginClick = () => {
    const formValues = form.getFieldsValue(true);
    const derivedFormValues = {
      ...formValues,
      availabilities_attributes: formValues.availabilities_attributes.filter(attr => !!attr.item_id)
    }
    localStorage.setItem('availabilityReport', JSON.stringify(derivedFormValues));
    window.location.href = '/users/auth/twitter';
  }

  const onClickHandler = () => {
    if (!isLoggedIn) {
      return message.warning("Please login to submit. This is necessary to prevent spam. We don't post to your twitter account. Pinky promise!");
    }
    form.validateFields()
      .then(() => {
        form.submit();
      })
  };
  

  return (
    <>
      {!isLoggedIn && (
        <Button className="AvailabilityReport__submit-btn" type="primary" onClick={onLoginClick}>
          Login With Twitter
        </Button>
      )}
      <Button type={isLoggedIn ? 'primary' : 'default'} className="AvailabilityReport__submit-btn" onClick={onClickHandler}>
        Submit
      </Button>
    </>
  )
};

export default LoginAndSubmitBtn;