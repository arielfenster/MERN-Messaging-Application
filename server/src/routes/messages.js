import express from 'express';
import Message from '../models/Message';

const router = express.Router();

// Get all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find({});
    res.status(200).send(messages);
  } catch (err) {
    console.error("Couldn't get all the messages: ", err);
    res.status(500).send('Failed to ');
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
    const messagesSent = userMessages.filter(msg => msg.sender === userId);
    const messagesReceived = userMessages.filter(msg => msg.receiver === userId);

    res.status(200).send({
      "sent": messagesSent,
      "received": messagesReceived
    });
    
  } catch (err) {
    console.log("Error fetching the user's messages");
    res.send(null);
  }
});

// Create a message
router.post('/', async (req, res) => {
  const { sender, receiver, subject, message } = req.body;
  
  const newMessage = new Message({
    sender,
    receiver,
    subject,
    message
  });

  try {
    const response = await newMessage.save();
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
    res.status(500).send('Failed to create the message');
  }
});

// Delete a message
router.delete('/:messageId', async (req, res) => {
  const { messageId } = req.params;

  try {
    const response = await Message.deleteOne({ _id: messageId });
    res.status(200).send('Deleted');
  } catch (err) {
    console.log('Error deleting the message: ', err);
    res.status(500).send('Failed to delete');
  }
});

export default router;
