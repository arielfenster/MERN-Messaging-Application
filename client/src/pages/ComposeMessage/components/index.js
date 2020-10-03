import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.compact.css';
import messagesModule from '../../../redux/modules/messages';
import errorsModule from '../../../redux/modules/errors';

const MessageForm = (props) => {
  const [displayMessage, setDisplayMessage] = useState('');
  const [formRef] = Form.useForm();

  const { addMessageSubmitted, messages, error } = props;

  const onFinish = (values) => {
    setDisplayMessage('Trying to send the message...');
    addMessageSubmitted(values);
  }

  // Create an effect for when a request is completed or failed due to an error
  useEffect(() => {
    if (error.message) {
      setDisplayMessage(`Error sending the message (${error.message})`);
    } else {
      setDisplayMessage('Message sent successfully');
    }
  }, [error.message, messages.length]);

  // Clear the display message for when the component is mounted
  useEffect(() => setDisplayMessage(''), []);

  return (
    <div>
      <Form
        onFinish={onFinish}
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
          label='Body'
          name='body'
          rules={[
            {
              required: true,
              whitespace: true,
              message: 'Cannot send an empty body'
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

      <Link to='/'>
        <Button type='link'> Back to start </Button>
      </Link>
    </div>
  );  
}

const mapStateToProps = (state) => ({
  [messagesModule.SLICE_KEY]: messagesModule.selectors.getMessages(state),
  [errorsModule.SLICE_KEY]: errorsModule.selectors.getErrors(state),
});

const mapDispatchToProps = {
  ...messagesModule.actions
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
