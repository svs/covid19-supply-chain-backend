import React from 'react';
import { Input } from 'antd';
import { AimIcon } from './Icons';
import { useState } from 'react';
import { useEffect } from 'react';


const LocationInput = ({ form }) => {
  const [permissionStatus, setPermissionStatus] = useState('');
  const [location, setLocation] = useState(null);
  const [displayValue, setDisplayValue] = useState();

  // TODO: Add watch for location?
  useEffect(() => {
    navigator.permissions.query({ name:'geolocation' }).then(function(result) {
      setPermissionStatus(result.state);

      result.onchange = function() {
        setPermissionStatus(result.state);
      }
    });
  }, [])

  useEffect(() => {
    if (permissionStatus === 'granted') {
      navigator.geolocation.getCurrentPosition(onPermissionGrant, () => setPermissionStatus('denied'), console.debug);
    }
  }, [permissionStatus]);

  const onPermissionGrant = ({ coords: { latitude, longitude }}) => {
    setPermissionStatus('granted');
    fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=234862071874572865916x5343`)
      .then(res => res.json())
      .then((res) => setDisplayValue(`${res.staddress}, ${res.region}`))
    form.setFieldsValue({ lat: latitude, lon: longitude });
  }

  const onFocusHandler = () => {
    navigator.permissions.query({ name:'geolocation' }).then(function(result) {
      if (result.state == 'prompt') {
        navigator.geolocation.getCurrentPosition(onPermissionGrant, () => setPermissionStatus('denied'), console.debug);
      }

      setPermissionStatus(result.state);

      result.onchange = function() {
        setPermissionStatus(result.state);
      }
    });
  }

  return (
    <Input value={displayValue} onFocusCapture={onFocusHandler} addonAfter={<AimIcon style={{ width: '16px', height: '16px', position: 'relative', top: '-2px' }} />} placeholder="Detect Location" />
  )
};

export default LocationInput;