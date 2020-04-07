import React, { useCallback, useEffect } from 'react';
import { Typography, Form, Input, Select, Button, Row, Col, Space } from 'antd';
import { MinusCircleTwoTone, PlusOutlined } from '@ant-design/icons';

import EssentialsSelect from './EssentialsSelect';
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

const rules = [{ required: false }];

const AvailabilityReport = () => {
  const [ form ] = useForm();
  const [items, setItems] = useState([]);

  const onFinishHander = useCallback((values) => {
    console.debug('onFinish');
    fetch('/api/v1/reports', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.getFieldsValue(true)) 
    })
    .then(res => res.json())
    .then(res => {
      console.debug({ res });
      // form.resetFields();
    })
  }, []);

  useEffect(() => {
    let essentialsStockStatus = [];
    const defaultOpenRows = new Array(DEFAULT_NUMBER_OF_ESSENTIAL_ROWS_DISPLAYED).fill(null);

    defaultOpenRows.forEach((_, i) => {
      essentialsStockStatus.push({
        essential: '',
        stockStatus: ''
      });
    });

    form.setFieldsValue({essentialsStockStatus});

    fetch('/api/v1/items')
      .then(res => res.json())
      .then((res) => {
        console.debug({ items: res });
      })
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
            name="storeName" 
            label="Store Name" 
            rules={[{ required: true, message: 'Please input the store name!'}]}
          >
            <Input size="middle" placeholder="Enter name (Optional)" />
          </Item>
          <Item
            className="AvailabilityReport__store-location"
            name="location"
            label="Store Location"
            rules={[{ required: false, message: 'Please add store location' }]}
          >
            <LocationInput />
          </Item>
          <Item
            className="AvailabilityReport__photo-input"
            name="photos"
            label="Store photos"
            rules={[{ required: false, message: 'Please add store photos' }]}
          >
            <PhotoInput form={form} />
          </Item>
          <List name="essentialsStockStatus">
            {(fields, { add, remove }) => {
              /**
               * `fields` internal fill with `name`, `key`, `fieldKey` props.
               * You can extends this into sub field to support multiple dynamic fields.
               */

              return (
                <>
                  {fields.map((field, index) => (
                    <Item label={`Item ${index + 1}`} className="AvailabilityReport__list-item">
                      <Space size="large">
                        <Item
                          name={[field.name, "essential"]}
                          fieldKey={[field.fieldKey, "essential"]}
                          rules={rules}
                        >
                          <EssentialsSelect items={items} />
                        </Item>
                      
                        <Item
                          name={[field.name, "stockStatus"]}
                          fieldKey={[field.fieldKey, "stockStatus"]}
                          rules={rules}
                        >
                          <Select placeholder="Select Availability" style={{ width: '215px' }}>
                            {stockStatuses.map(s => (
                              <Option value={s} key={s}>{s}</Option>
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
              );
            }}
          </List>
          <LoginAndSubmitBtn form={form} />
        </Form>
      </div>
    </section>
  );
}

export default AvailabilityReport;
