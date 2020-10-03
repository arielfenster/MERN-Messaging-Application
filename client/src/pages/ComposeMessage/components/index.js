import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import messagesModule from '../../../redux/modules/messages';
import errorsModule from '../../../redux/modules/errors';
import { Container, Footer } from '../styles';

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
      formRef.resetFields();
    }
  }, [error.message, messages.length]);

  // Clear the display message for when the component is mounted
  useEffect(() => setDisplayMessage(''), []);

  const layouts = {
    labelCol: {
      span: 3,
      offset: '3em',
    },
    wrapperCol: {
      span: 21,
      offset: '2em',
    }
  };

  return (
    <Container>
      <Form
        onFinish={onFinish}
        form={formRef}
        validateTrigger='onBlur'
        size='large'
        labelCol={layouts.labelCol}
        wrapperCol={layouts.wrapperCol}
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

        <Footer>          
          <p> {`Message status: ${displayMessage}`} </p>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Send
            </Button>
          </Form.Item>
        </Footer>

      </Form>

      <Link to='/'>
        <Button style={{width: '100%'}} type='link'> Back to start </Button>
      </Link>
    </Container>
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
