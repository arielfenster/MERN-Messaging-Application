import React from 'react';
import axios from 'axios';
import { Button, Popconfirm, message as SystemMessage } from 'antd';
const DeleteMessagePopconfirm = ({ messageId }) => {

  const handleConfirm = async () => {
    try {
      await axios.delete(`http://localhost:5000/messages/${messageId}`);
      SystemMessage.success('Message deleted');
    } catch (error) {
      SystemMessage.error('Failed to delete the message');
    }
  }

  return (
    <Popconfirm
      title='Confirm delete'
      okText='Delete'
      onConfirm={handleConfirm}
    >
      <Button type='link' size='large'>
        Delete
      </Button>
    </Popconfirm>
  );
}

export default DeleteMessagePopconfirm;
