import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.compact.css';

const MessageForm = () => {
  const [displayMessage, setDisplayMessage] = useState('');
  const [formRef] = Form.useForm();

  const onFinish = async (values) => {
    try {
      await axios.post('http://localhost:5000/messages', { ...values });
      setDisplayMessage('Message sent successfully');
      formRef.resetFields();
    } catch (err) {
      setDisplayMessage('Error sending the message');
      console.log('Error sending the message to the backend: ', err);
    }
  }

  const onFinishFailed = (err) => {
    console.log('Error: ', err);
  }

  return (
    <Form
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={formRef}
      validateTrigger="onBlur"
    >
      <Form.Item
        label='Sender id'
        name='sender'
        rules={[
          {
            required: true,
            whitespace: true,
            message: 'Must enter sender id'
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
            whitespace: true,
            message: 'Must enter receiver id'
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
            whitespace: true,
            min: 1,
            message: 'Cannot send an empty subject'
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
          Send
        </Button>
      </Form.Item>

      <p> {displayMessage} </p>
    </Form>
  );  
}

export default MessageForm;
