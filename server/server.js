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

// Setup
const app = express();
app.use(cors());
app.use(express.json());

// Configure routes
app.use('/messages', routers.messagesRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
