import { combineReducers } from 'redux';
import messagesModule from '../modules/messages'

const rootReducer = combineReducers({
  messages: messagesModule.reducer,
});

export default rootReducer;
