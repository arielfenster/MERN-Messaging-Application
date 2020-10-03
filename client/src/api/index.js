import axios from 'axios';

// Backend requests setup
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/messages',
});

const getAllMessages = async () => {
  try {
    return await axiosInstance.get('/');
  } catch (error) {
    const { response } = error;

    throw new Error(JSON.stringify({
      error: response.data.error,
      status: response.status,
    }));
  }
}

const getUserMessages = async (userId) => {
  try {
    return await axiosInstance.get(`/${userId}`);
  } catch (error) {
    const { response } = error;

    throw new Error(JSON.stringify({
      error: response.data.error,
      status: response.status,
    }));
  }
}

const addMessage = async (values) => {
  try {
    return await axiosInstance.post('/', { ...values });
  } catch (error) {
    const { response } = error;

    throw new Error(JSON.stringify({
      error: response.data.error,
      status: response.status,
    }));
  }
}


const deleteMessage = async (messageId) => {
  try {
    await axiosInstance.delete(`/${messageId}`);
  } catch (error) {
    const { response } = error;

    throw new Error(JSON.stringify({
      error: response.data.error,
      status: response.status,
    }));
  }
}


export default {
  getAllMessages,
  getUserMessages,
  addMessage,
  deleteMessage
};
