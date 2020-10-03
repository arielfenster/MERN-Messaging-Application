import express from 'express';
import Message from '../models/Message';

const router = express.Router();

// Get all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find({});

    // Check for errors
    if (!messages) { throw new Error('Failed to retrieve all the messages') }

    res.status(200).send(messages);    
  } catch (error) {
    res.status(500).json({ error: error.message }); 
  }
});

// Get all messages of user id
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const userMessages = await Message.find({
      $or: [
        {
          sender: userId
        },
        {
          receiver: userId
        }
      ]
    });

    // Check for errors
    if (!userMessages) {
      return res.status(400).json({ error: `Failed to get user ${userId}'s messages`});
    }
  
    // If there are no messages then send an empty list
    if (userMessages.length == 0) {
      return res.status(200).send([]);
    }
  
    const messagesSent = [];
    const messagesReceived = [];
    userMessages.forEach(msg => {
      // For the special scenario that a user sent a message for himself - so we'll display it on both tabs
      if (msg.sender === userId) { messagesSent.push(msg); }
      if (msg.receiver === userId) { messagesReceived.push(msg); }
    });
  
    const messages = {
      sent: messagesSent,
      received: messagesReceived
    };
    res.status(200).json(messages); 

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a message
router.post('/', async (req, res) => {
  const { sender, receiver, subject, body } = req.body;
  
  const newMessage = new Message({
    sender,
    receiver,
    subject,
    body
  });

  try {
    const response = await newMessage.save();
    
    // Check for errors
    if (!response) {
      return res.status(400).json({ error: 'Failed to create the message' });
    }
    res.status(200).send(response); 

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a message
router.delete('/:messageId', async (req, res) => {
  const { messageId } = req.params;
  
  try {
    const response = await Message.deleteOne({ _id: messageId });
    
    // Check for errors
    if (!response || response.deletedCount == 0) {
      return res.status(400).json({ error: `Failed to delete message ${messageId}` });
    }
    
    res.status(200).json({ success: true });
     
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
