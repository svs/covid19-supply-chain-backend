import React from 'react';
import { Input } from 'antd';
import { AimIcon } from './Icons';
import { useState } from 'react';
import { useEffect } from 'react';
import './LocationInput.css';

const LocationInput = ({ form }) => {
  const [permissionStatus, setPermissionStatus] = useState();
  const [displayValue, setDisplayValue] = useState();

  useEffect(() => {
    console.debug({ permissionStatus })
  }, [permissionStatus]);

  const onPermissionGrant = ({ coords: { latitude, longitude }}) => {
    console.debug('onPermissionGrant');
    setPermissionStatus('granted');
    fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=234862071874572865916x5343`)
      .then(res => res.json())
      .then((res) => setDisplayValue(`${res.staddress}, ${res.region}`))
    form.setFieldsValue({ lat: latitude, lon: longitude });
  }

  const onFocusHandler = () => {
    navigator.permissions.query({ name:'geolocation' }).then(function(result) {
      if (['granted', 'prompt'].includes(result.state)) {
        navigator.geolocation.getCurrentPosition(onPermissionGrant, () => setPermissionStatus('denied'), {maximumAge:60000, timeout:5000, enableHighAccuracy:true});
      }

      setPermissionStatus(result.state);

      result.onchange = function() {
        setPermissionStatus(result.state);
      }
    });
  }

  return (
    <div className="LocationInput">
      <Input value={displayValue} onFocusCapture={onFocusHandler} placeholder="Detect Location" />
      <AimIcon className="LocationInput__icon" onClick={onFocusHandler} />
    </div>
  )
};

export default LocationInput;