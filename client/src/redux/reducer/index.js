import { combineReducers } from 'redux';
import messagesModule from '../modules/messages'
import errorsModule from '../modules/errors';

const rootReducer = combineReducers({
  messages: messagesModule.reducer,
  error: errorsModule.reducer,
});

export default rootReducer;
