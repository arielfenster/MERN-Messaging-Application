import React from 'react';
import { Tabs } from 'antd';
import MessageItem from '../message/MessageItem';

const { TabPane } = Tabs;

const MessagesList = ({ messages }) => {
  return (
    <Tabs
      size="large"
      centered
    >
      <TabPane key='sent' tab='Sent'>
        {
          messages.sent && messages.sent.map(msg => (
            <MessageItem
              key={msg._id}
              message={msg}
              type='sent'
            />
          ))
        }
      </TabPane>

      <TabPane key='received' tab='Received'>
        {
          messages.received && messages.received.map(msg => (
            <MessageItem
              key={msg._id}
              message={msg}
              type='received'
            />
          ))
        }
      </TabPane>
    </Tabs>
  );
}

export default MessagesList;
