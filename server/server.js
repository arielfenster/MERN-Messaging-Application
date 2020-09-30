import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routers from './src/routes';
import dotenv from 'dotenv';
dotenv.config();

// Connect to DB
const URI = process.env.ATLAS_URI;
mongoose.connect(
  URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log('Error in connecting: ', err);
    else console.log('Connected to Mongo');
  }
)

const app = express();
app.use(cors());

const PORT = 5000;

// Configure routes
app.use('/messages', routers.messagesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
