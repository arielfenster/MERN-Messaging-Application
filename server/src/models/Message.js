import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
  sender: String,
  receiver: String,
  subject: String,
  body: String,
  date: {
    type: Date,
    default: Date.now
  }
});

export default model('Message', messageSchema);
