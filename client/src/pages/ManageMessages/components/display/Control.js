import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import MessagesList from './MessagesList';

const Control = () => {
  const [userIdQuery, setUserIdQuery] = useState('');
  const [messages, setMessages] = useState([]);

  // On component mount - fetch all the messages
  useEffect(() => {
    const getAllMessages = async () => {
      const response = await axios.get('http://localhost:5000/messages/');
      console.log(response.data);
      setMessages(response.data);
    };

    // getAllMessages();
  }, []);

  /**
   * Everytime the user enters a user id, fire a GET request to the backend
   * to fetch all the messages relevant to that user id
   */
  useEffect(() => {
    const getUserMessages = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/messages/${userIdQuery}`);
        // console.log(response.data);
        setMessages(response.data);
      } catch (err) {
        console.log("Error fetching the user's messages: ", err);
      }
    };

    getUserMessages();
  }, [userIdQuery]);

  return (
    <div>
      <SearchBar onChange={(queryId) => setUserIdQuery(queryId)}/>
      <MessagesList messages={messages} />
    </div>
  );
}

export default Control;
