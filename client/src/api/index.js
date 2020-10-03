import axios from 'axios';

// Backend requests setup
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/messages',
});

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
    return await axiosInstance.get('/');
  } catch (error) {
    throw createErrorWithStatus(error);
  }
}

const getUserMessages = async (userId) => {
  try {
    return await axiosInstance.get(`/${userId}`);
  } catch (error) {
    throw createErrorWithStatus(error);
  }
}

const addMessage = async (values) => {
  try {
    return await axiosInstance.post('/', { ...values });
  } catch (error) {
    throw createErrorWithStatus(error); 
  }
}


const deleteMessage = async (messageId) => {
  try {
    await axiosInstance.delete(`/${messageId}`);
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
