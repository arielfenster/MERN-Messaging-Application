import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
import routers from './src/routes';

// Connect to DB
const mongoURI = 'mongodb+srv://arielfenster:mnE9C4GzSLraVrXy@messaging-app.kkcbr.mongodb.net/messaging-app?retryWrites=true&w=majority';
mongoose.connect(
  mongoURI,
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

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  const staticPath = path.normalize(path.join(__dirname, '../client/build'));
  app.use(express.static(staticPath));

  // Load the static 
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(staticPath, 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
