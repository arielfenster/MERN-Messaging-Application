import axios from 'axios';

// Backend requests setup
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/messages',
});

const getAllMessages = async () => {
  // try {
    return await axiosInstance.get('/');
  // } catch (error) {
  //   return JSON.stringify({
  //     error: error.message
  //   });
  // }
}

const getUserMessages = async (userId) => {
  // try {
    return await axiosInstance.get(`/${userId}`);
  // } catch (error) {
  //   return JSON.stringify({
  //     error: error.message
  //   });
  // }
}

const addMessage = async (values) => {
  // try {
    return await axiosInstance.post('/', { ...values });
  // } catch (error) {
  //   return JSON.stringify({
  //     error: error.message
  //   });
  // }
}


const deleteMessage = async (messageId) => {
  // try {
    return await axiosInstance.delete(`/${messageId}`);
  // } catch (error) {
  //   return JSON.stringify({
  //     error: error.message
  //   });
  // }
}


export default {
  getAllMessages,
  getUserMessages,
  addMessage,
  deleteMessage
};
