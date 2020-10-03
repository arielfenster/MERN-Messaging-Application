import React from 'react';
import { Card } from 'antd';
import DeleteMessagePopconfirm from './DeleteMessagePopconfirm';

const MessageDetail = ({ label, value }) => (
  <p style={{ fontSize: '14px', textAlign: 'left', margin: '5px 0px' }}>
    <b> {`${label}:`} </b> {value}
  </p>
)

const MessageItem = ({ message, type }) => {
  return (
    <Card
      title={`Title: ${message.subject}`}
      extra={<DeleteMessagePopconfirm messageId={message._id} />}
    >
      {
        type === 'sent' ? 
          <MessageDetail label='To' value={message.receiver} />
          :
          <MessageDetail label='From' value={message.sender} />
      }
      <MessageDetail label='At' value={message.date} />
      <MessageDetail label='Body' value={message.body} />
    </Card>
  );
}

export default MessageItem;
