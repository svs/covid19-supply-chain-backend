import React, { useCallback } from "react"
import { Typography, Form, Input, Button } from "antd";

const { Title } = Typography;
const { useForm, Item } = Form;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const AvailabilityReport = () => {
  const [ form ] = useForm();
  
  // get location effect?

  const onFinish = useCallback((values) => {
    console.log(values);
  }, []);

  return (
    <>
      <Title style={{ margin: 'auto', textAlign: 'center' }}>Availibility Report</Title>
      <Form {...layout} form={form} name="availibility-report" onFinish={onFinish}>
        <Item name="storeName" label="Store Name" rules={[{ required: true }]}>
          <Input />
        </Item>
        <Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Item>
      </Form>
    </>
  );
}

export default AvailabilityReport;
