import React, { useContext } from 'react';
import { Button, Popconfirm, message as SystemMessage } from 'antd';
import { MessagesModuleContext } from '../display/Dashboard';

const DeleteMessagePopconfirm = ({ messageId }) => {

  // Retrieve the context that was created in the Control component
  const contextValue = useContext(MessagesModuleContext);

  const handleConfirm = async () => {
    try {
      // Call the confirm function (deleting the message) and display appropriate message
      await contextValue.onConfirmAction(messageId);
      SystemMessage.success('Message deleted');
    } catch (error) {
      SystemMessage.error('Failed to delete the message: ', error.message);
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
