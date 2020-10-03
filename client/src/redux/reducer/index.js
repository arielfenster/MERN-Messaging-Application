import { combineReducers } from 'redux';
import messagesModule from '../modules/messages'
import errorsModule from '../modules/errors';

const rootReducer = combineReducers({
  messages: messagesModule.reducer,
  errors: errorsModule.reducer,
});

export default rootReducer;
