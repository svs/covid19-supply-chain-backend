import React, { useCallback, useEffect } from 'react';
import { Typography, Form, Input, Select, Button, Row, Col } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import './AvailabilityReport.css';

import stockStatuses from '../../constants/json/stockStatuses.json';

// FIXME: import from common local config
const DEFAULT_NUMBER_OF_ESSENTIAL_ROWS_DISPLAYED = 3;

const { Title, Paragraph } = Typography;
const { useForm, Item, List } = Form;
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

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
        <Form {...layout} form={form} name="availibility-report" onFinish={onFinish}>
          <Item
            name="storeName" 
            label="Store Name" 
            rules={[{ required: true, message: 'Please input the store name!'}]}
          >
            <Input size="middle"/>
          </Item>
          <List {...tailLayout} name="essentialsStockStatus">
            {(fields, { add, remove }) => {
              /**
               * `fields` internal fill with `name`, `key`, `fieldKey` props.
               * You can extends this into sub field to support multiple dynamic fields.
               */

              return (
                <div>
                  {fields.map((field, index) => (
                <>
                        <Item
                          name={[field.name, "essential"]}
                          fieldKey={[field.fieldKey, "essential"]}
                          rules={rules}
                        >
                          <Input placeholder="Essential" />
                        </Item>
                      
                        <Item
                          name={[field.name, "stockStatus"]}
                          fieldKey={[field.fieldKey, "stockStatus"]}
                          rules={rules}
                        >
                          <Select placeholder="Stock Status">
                            {stockStatuses.map(s => (
                              <Option key={s}>{s}</Option>
                            ))}
                          </Select>
                        </Item>
                     
                        <MinusCircleOutlined
                          onClick={() => {
                            remove(field.name);
                          }}
                        />
                     </>
                  ))}
                  <Item>
                    <Button
                      type="dashed"
                      onClick={() => {
                        add();
                      }}
                      style={{ width: "100%" }}
                    >
                      <PlusOutlined /> Add field
                    </Button>
                  </Item>
                </div>
              );
            }}
          </List>
          <Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Item>
        </Form>
      </div>
    </section>
  );
}

export default AvailabilityReport;
