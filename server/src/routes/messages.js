import express from 'express';
import Message from '../models/Message';

const router = express.Router();

// Get all messages of user id
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const items = await Message.find({ sender: userId });
    console.log(items);
    res.send(items);
  } catch (err) {
    console.log("Error fetching the user's messages");
    res.send(null);
  }
});

// Create a message
router.post('/:userId', async (req, res) => {
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
