import express from 'express';
import Message from '../models/Message';

const router = express.Router();

// Get all messages
router.get('/', async (req, res) => {
  const messages = await Message.find({});
  res.status(200).send(messages);  
});

// Get all messages of user id
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

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

  // If there are no messages then send an empty list
  if (userMessages.length == 0) {
    return res.status(200).send([]);
  }

  const messagesSent = [];
  const messagesReceived = [];
  userMessages.forEach(msg => {
    msg.sender === userId ? messagesSent.push(msg) : messagesReceived.push(msg);
  });

  const messages = {
    sent: messagesSent,
    received: messagesReceived
  };

  res.status(200).json(messages);
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

  const response = await newMessage.save();
  res.status(200).send(response);
});

// Delete a message
router.delete('/:messageId', async (req, res) => {
  const { messageId } = req.params;
  
  const response = await Message.deleteOne({ _id: messageId });
  res.status(200).json({ success: true });
});

export default router;
