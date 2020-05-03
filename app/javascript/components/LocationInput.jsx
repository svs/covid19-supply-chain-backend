import React from 'react';
import { Input, Typography, Button } from 'antd';
import { AimIcon } from './Icons';
import { useState } from 'react';
import { useEffect } from 'react';
import './LocationInput.css';

const { Text } = Typography;

const LocationInput = ({ form }) => {
  const [permissionStatus, setPermissionStatus] = useState();
  const [displayValue, setDisplayValue] = useState();

  useEffect(() => {
    const availabilityReport = localStorage.getItem('availabilityReport') ? JSON.parse(localStorage.getItem('availabilityReport')) : null;
    if (availabilityReport && availabilityReport.lat && availabilityReport.lon) {
      addDisplayValue({ latitude: availabilityReport.lat, longitude: availabilityReport.lon });
    }
  }, [])

  useEffect(() => {
    console.debug({ permissionStatus })
    // if (permissionStatus === 'denied') {
    //   form.setFields([{
    //     name: 'lat',
    //     errors: [`Store location is a must to track supply chain.`] 
    //   }])
    // }
  }, [permissionStatus]);

  const addDisplayValue = ({ latitude, longitude }) => fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=234862071874572865916x5343`)
    .then(res => res.json())
    .then((res) => setDisplayValue(`${res.staddress}, ${res.region}`))

  const onPermissionGrant = ({ coords: { latitude, longitude }}) => {
    console.debug('onPermissionGrant');
    setPermissionStatus('granted');
    addDisplayValue({ latitude, longitude });
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

  const isChrome = () => /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  const isFirefox = () => navigator.userAgent.indexOf("Firefox") != -1;
  return (
    <>
      <div className="LocationInput">
        <Input value={displayValue} onFocusCapture={onFocusHandler} placeholder="Detect Location" />
        <AimIcon className="LocationInput__icon" onClick={onFocusHandler} />
      </div>
      {permissionStatus === 'denied' && isChrome() && (
        <Text type="danger">Please allow this location for this site from this url <Text strong>Settings > Site settings > Location</Text></Text>
      )}
      {permissionStatus === 'denied' && isFirefox() && (
        <Text type="danger">Please allow this location for this site from this site from <Text strong>Tools > Page Info > Permissions</Text></Text>
      )}
    </>
  )
};

export default LocationInput;