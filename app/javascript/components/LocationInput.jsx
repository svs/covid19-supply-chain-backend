import React from 'react';
import { Input } from 'antd';
import { AimIcon } from './Icons';

const LocationInput = () => {
  return (
    <Input addonAfter={<AimIcon style={{ width: '16px', height: '16px', position: 'relative', top: '-2px' }} />} placeholder="Detect Location" />
  )
};

export default LocationInput;