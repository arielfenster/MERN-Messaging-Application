import React, { createContext } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import MessagesList from './MessagesList';
import messagesModule from '../../../../redux/modules/messages';
import { Button } from 'antd';

// Create a context that will be used for deleting a message
export const MessagesModuleContext = createContext();

const Dashboard = (props) => {

  const {
    messages,
    getUserMessagesSubmitted,
    deleteMessageSubmitted,
    clearMessages
  } = props;
    
  /**
   * Everytime the user types a user id, fire a GET request to the backend
   * to fetch all the messages relevant to that user id
   */
  const handleChange = (queryId) => {
    getUserMessagesSubmitted(queryId);
  }

  const contextValue = {
    onConfirmAction: (messageId) => { deleteMessageSubmitted(messageId) },
  };

  return (
    <div>
      <div>
        <Link onClick={() => clearMessages()} to='/'>
          <Button type='link'> Back to start </Button>
        </Link>
        <SearchBar onChange={handleChange}/>
      </div>
      <MessagesModuleContext.Provider value={contextValue}>
        <MessagesList messages={messages} />
      </MessagesModuleContext.Provider>
    </div>
  );
}

const mapStateToProps = (state) => ({
  [messagesModule.SLICE_KEY]: messagesModule.selectors.getMessages(state),
});

const mapDispatchToProps = {
  ...messagesModule.actions
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
