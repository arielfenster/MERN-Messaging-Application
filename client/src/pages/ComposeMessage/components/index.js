import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.compact.css';
import messagesModule from '../../../redux/modules/messages';


const MessageForm = (props) => {
  const [displayMessage, setDisplayMessage] = useState('');
  const [formRef] = Form.useForm();

  const onFinish = async (values) => {
    try {
      props.addMessageSubmitted(values);
      setDisplayMessage('Message sent successfully');
      formRef.resetFields();
    } catch (err) {
      console.log("err: ", err);
      setDisplayMessage('Error sending the message');
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

const mapStateToProps = (state) => ({
  messages: messagesModule.selectors.getMessages(state),
});

const mapDispatchToProps = {
  ...messagesModule.actions
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
