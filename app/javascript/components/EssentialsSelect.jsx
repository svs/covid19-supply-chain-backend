import React from 'react';
import { Select } from 'antd';

import essentials from '../../constants/json/essentials.json';

const { OptGroup, Option } = Select;

const renderOptGroup = (group) => (
  <OptGroup label={group[0]}>
    { group[1].map(option => <Option value={option}>{option}</Option>)}
  </OptGroup>
);

const EssentialsSelect = () => {
  return (
    <Select placeholder="Select Item">
      {
        Object.entries(essentials).map(group => renderOptGroup(group))
      }
  </Select>
  )
};

export default EssentialsSelect;