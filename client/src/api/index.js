import axios from 'axios';

// Helper function
const createErrorWithStatus = (error) => {
  const { response } = error;

  return new Error(JSON.stringify({
    message: response ? response.data.error : error.message,
    status: response ? response.status : 500,
  }));
}


const getAllMessages = async () => {
  try {
    return await axios.get('/messages/');
  } catch (error) {
    throw createErrorWithStatus(error);
  }
}

const getUserMessages = async (userId) => {
  try {
    return await axios.get(`/messages/${userId}`);
  } catch (error) {
    throw createErrorWithStatus(error);
  }
}

const addMessage = async (values) => {
  try {
    return await axios.post('/messages/', { ...values });
  } catch (error) {
    throw createErrorWithStatus(error); 
  }
}


const deleteMessage = async (messageId) => {
  try {
    await axios.delete(`/messages/${messageId}`);
  } catch (error) {
    throw createErrorWithStatus(error);
  }
}


export default {
  getAllMessages,
  getUserMessages,
  addMessage,
  deleteMessage
};
