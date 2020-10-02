import axios from 'axios';

// Backend requests setup
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/messages',
});

const getAllMessages = async () => {
  try {
    return await axiosInstance.get('/');
  } catch (error) {
    console.log(`Error fetching all the messages: `, error);
    return null;
  }
}

const getUserMessages = async (userId) => {
  try {
    return await axiosInstance.get(`/${userId}`);
  } catch (error) {
    console.log(`Error fetching user ${userId}'s messages: `, error);
    return null;
  }
}

const addMessage = async (values) => {
  try {
    const response = await axiosInstance.post('/', { ...values });
    return response;
  } catch (error) {
    console.log('Error sending the message to the backend: ', error);
    return null;
  }
}


const deleteMessage = async (messageId) => {
  try {
    return await axiosInstance.delete(`/${messageId}`);
  } catch (error) {
    console.log(`Error deleting message ${messageId}: `, error);
    return null;
  }
}


export default {
  getAllMessages,
  getUserMessages,
  addMessage,
  deleteMessage
};
