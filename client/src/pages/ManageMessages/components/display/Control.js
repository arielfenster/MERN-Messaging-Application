import React, { useState, useEffect, createContext } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import MessagesList from './MessagesList';
import messagesModule from '../../../../redux/modules/messages';

// Create a context that will be used for deleting a message
export const MessagesModuleContext = createContext();

const Control = (props) => {
  const [userIdQuery, setUserIdQuery] = useState('');

  /**
   * Everytime the user types a user id, fire a GET request to the backend
   * to fetch all the messages relevant to that user id
   */
  useEffect(() => {
    props.getUserMessagesSubmitted(userIdQuery);
  }, [userIdQuery]);

  const contextValue = {
    onConfirmAction: (messageId) => {props.deleteMessageSubmitted(messageId)},
  };

  return (
    <div>
      <SearchBar onChange={(queryId) => setUserIdQuery(queryId)}/>

      <MessagesModuleContext.Provider value={contextValue}>
        <MessagesList messages={props.messages} />
      </MessagesModuleContext.Provider>
    </div>
  );
}

const mapStateToProps = (state) => ({
  messages: messagesModule.selectors.getMessages(state),
});

const mapDispatchToProps = {
  ...messagesModule.actions
};

export default connect(mapStateToProps, mapDispatchToProps)(Control);
