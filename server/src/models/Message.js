import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  sender: String,
  receiver: String,
  subject: String,
  message: String,
  date: {
    type: Date,
    default: Date.now
  }
});


export default mongoose.model('Message', messageSchema);
