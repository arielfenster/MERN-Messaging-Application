const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const routers = require('./src/routes');
require('dotenv').config();

// Connect to DB
const mongoURI = process.env.MONGO_URI;
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
  app.use(express.static('client/build'));

  // Load the static 
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'../client','build','index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
