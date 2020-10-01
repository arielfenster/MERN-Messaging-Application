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
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Card>
        {
          type === 'sent' ? 
            <MessageDetail label='To' value={message.receiver} />
            :
            <MessageDetail label='From' value={message.sender} />
        }
        <MessageDetail label='Title' value={message.subject} />     
        <MessageDetail label='Message' value={message.message} />
      </Card>
      <DeleteMessagePopconfirm messageId={message._id} />
    </div>
  );
}

export default MessageItem;
