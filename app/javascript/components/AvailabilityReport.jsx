import React, { useCallback, useEffect } from 'react';
import { Typography, Form, Input, Select, Button, Row, Col, Space } from 'antd';
import { MinusCircleTwoTone, PlusOutlined } from '@ant-design/icons';

import EssentialsSelect from './EssentialsSelect';
import LocationInput from './LocationInput';
import PhotoInput from './PhotoInput';
import './AvailabilityReport.css';

import stockStatuses from '../../constants/json/stockStatuses.json';

// FIXME: import from common local config
const DEFAULT_NUMBER_OF_ESSENTIAL_ROWS_DISPLAYED = 3;

const { Title, Paragraph } = Typography;
const { useForm, Item, List } = Form;
const { Option } = Select;

const rules = [{ required: true }];

const AvailabilityReport = () => {
  const [ form ] = useForm();
  
  // get location effect?

  const onFinish = useCallback((values) => {
    console.log(values);
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
  }, []);

  return (
    <section className='AvailabilityReport'>
      <div className="AvailabilityReport__container">
        <Title level={4}>Report Essential Goods Availability</Title>
        <Paragraph>Help everyone by reporting availability of essential goods when you shop.</Paragraph>
        <Form form={form} name="availibility-report" className="AvailabilityReport__form" onFinish={onFinish}>
          <Item
            className="AvailabilityReport__store-name"
            name="storeName" 
            label="Store Name" 
            rules={[{ required: false, message: 'Please input the store name!'}]}
          >
            <Input size="middle" placeholder="Enter name (Optional)" />
          </Item>
          <Item
            className="AvailabilityReport__store-location"
            name="location"
            label="Store Location"
            rules={[{ required: true, message: 'Please add store location' }]}
          >
            <LocationInput />
          </Item>
          <Item
            className="AvailabilityReport__photo-input"
            name="photos"
            label="Store photos"
            rules={[{ required: false, message: 'Please add store photos' }]}
          >
            <PhotoInput />
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
                          <EssentialsSelect />
                        </Item>
                      
                        <Item
                          name={[field.name, "stockStatus"]}
                          fieldKey={[field.fieldKey, "stockStatus"]}
                          rules={rules}
                        >
                          <Select placeholder="Select Availability">
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
          <Button className="AvailabilityReport__submit-btn" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
}

export default AvailabilityReport;
