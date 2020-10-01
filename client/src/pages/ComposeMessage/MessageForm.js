import React from 'react';
import { Form, Input, Button } from 'antd';
// import 'antd/dist/antd.compact.css';

const MessageForm = () => {
  // const [values, setValues] = useState({ });

  const onFinish = (values) => {
    console.log('Finished: ', values);
  }

  const onFinishFailed = (err) => {
    console.log('Error: ', err);
  }

  return (
    <Form
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label='Sender id'
        name='sender'
        rules={[
          {
            required: true,
            message: 'Must enter sender id!'
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Receiver id'
        name='receiver'
        rules={[
          {
            required: true,
            message: 'Must enter receiver id!'
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Subject'
        name='subject'
        rules={[
          {
            required: true,
            min: 3,
            message: 'Subject must be at least 3 characters long!'
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Message'
        name='message'
        rules={[
          {
            required: true,
            whitespace: true,
            message: 'Cannot send an empty message'
          }
        ]}
      >
        <Input.TextArea />
      </Form.Item>

      
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );  
}

export default MessageForm;
