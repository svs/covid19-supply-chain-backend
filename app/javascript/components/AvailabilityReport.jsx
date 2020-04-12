import React, { useCallback, useEffect } from 'react';
import { Typography, Form, Input, Select, Button, Row, Col, Space, message } from 'antd';
import { MinusCircleTwoTone, PlusOutlined } from '@ant-design/icons';

import EssentialsSelect, { useItems } from './EssentialsSelect';
import LocationInput from './LocationInput';
import PhotoInput from './PhotoInput';
import LoginAndSubmitBtn from './LoginAndSubmitBtn';
import './AvailabilityReport.css';

import stockStatuses from '../../constants/json/stockStatuses.json';
import { useState } from 'react';

// FIXME: import from common local config
const DEFAULT_NUMBER_OF_ESSENTIAL_ROWS_DISPLAYED = 3;

const { Title, Paragraph } = Typography;
const { useForm, Item, List } = Form;
const { Option } = Select;

const AvailabilityReport = () => {
  const [ form ] = useForm();
  const items = useItems();

  const onFinishHander = useCallback((values) => {
    // console.debug('onFinish');
    fetch('/api/v1/reports', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ availability_report: { ...form.getFieldsValue(true) } }) 
    })
    .then(res => res.json())
    .then(res => {
      if (res.success) {
        message.success("Thank you for your submission. You're a Hero!");
        form.resetFields();
        localStorage.removeItem('availabilityReport');
        addItems();
    } else {
        message.error(res.message);
      }
    })
  }, []);

  const addItems = () => {
    let availabilities_attributes = [];
    const availabilityReport = localStorage.getItem('availabilityReport');
    if (!availabilityReport) {
      const defaultOpenRows = new Array(DEFAULT_NUMBER_OF_ESSENTIAL_ROWS_DISPLAYED).fill(null);

      defaultOpenRows.forEach((_, i) => {
        availabilities_attributes.push({
          item_id: undefined,
          availability: undefined
        });
      });

      form.setFieldsValue({availabilities_attributes});
    } 
    
  }

  useEffect(() => {
    addItems();
  }, []);

  return (
    <section className='AvailabilityReport'>
      <div className="AvailabilityReport__container">
        <Title level={4}>Report Essential Goods Availability</Title>
        <Paragraph>Help everyone by reporting availability of essential goods when you shop.</Paragraph>
        <Form 
          form={form} 
          name="availibility-report" 
          className="AvailabilityReport__form" 
          onFinish={onFinishHander} 
          // TODO: native form submit doesn't seem to be working. Fix and use this if possible
          // action="/api/availability_reports" 
          // method="POST"
          // onSubmitCapture={onSubmitHandler}
        >
          <Item
            className="AvailabilityReport__store-name"
            name="store_name" 
            label="Store Name" 
            rules={[{ required: true, message: 'Please input the store name!'}]}
          >
            <Input size="middle" placeholder="Enter name" />
          </Item>
          <Item
            className="AvailabilityReport__store-location"
            name='lat'
            label="Store Location"
            rules={[{ required: true, message: 'Please add store location' }]}
          >
            <LocationInput form={form} />
          </Item>
          <Item
            className="AvailabilityReport__photo-input"
            name="photos"
            label="Store photos"
            rules={[{ required: false, message: 'Please add store photos' }]}
          >
            <PhotoInput form={form} />
          </Item>
          <List name="availabilities_attributes">
            {(fields, { add, remove }) => (
                <>
                  {fields.map((field, index) => (
                    <Item label={`Item ${index + 1}`} key={field.key} rules={[{ required: false }]} className="AvailabilityReport__list-item">
                      <Space size="large">
                        <Item
                          name={[field.name, "item_id"]}
                          fieldKey={[field.fieldKey, "item_id"]}
                          rules={[{ required: true }]}
                        >
                          <EssentialsSelect items={items} />
                        </Item>
                      
                        <Item
                          name={[field.name, "availability"]}
                          fieldKey={[field.fieldKey, "availability"]}
                          rules={[{ required: true }]}
                        >
                          <Select placeholder="Select Availability" style={{ width: '215px' }}>
                            {stockStatuses.map(s => (
                              <Option value={s.key} key={s.key}>{s.value}</Option>
                            ))}
                          </Select>
                        </Item>
                        <MinusCircleTwoTone
                          color="red"
                          twoToneColor="#f5222d"
                          className="AvailabilityReport__remove-icon"
                          onClick={() => {
                            remove(field.name);
                          }}
                        />
                      </Space>
                    </Item>
                  ))}
                  <Button
                    className="AvailabilityReport__add-btn"
                    type="dashed"
                    onClick={() => {
                      add();
                    }}
                  >
                    <PlusOutlined /> Add Item
                  </Button>
                </>
              )
            }
          </List>
          <LoginAndSubmitBtn form={form} />
        </Form>
      </div>
    </section>
  );
}

export default AvailabilityReport;
