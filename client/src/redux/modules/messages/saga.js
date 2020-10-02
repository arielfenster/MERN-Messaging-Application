import apiActions from '../../../api';
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { actions as messagesActions } from './slice';


// @@@@@ TODO: ADD A ERRORS SLICE AND REDUCER TO HANDLE THE ERRORS RETURNED


function* getAllMessages() {

}

function* getUserMessages(action) {
  const userId = action.payload;

  try {
    const response = yield call(apiActions.getUserMessages, userId);
    yield put(messagesActions.getUserMessagesSuccess(response.data));
  } catch (error) {
    
  }
}

function* addMessage(action) {
  const values = action.payload;

  try {
    const response = yield call(apiActions.addMessage, values);
    console.log('The response data is: ', response.data);
    yield put(messagesActions.addMessage(response.data));
  } catch (error) {
    
  }
}

function* deleteMessage(action) {
  const messageId = action.payload;

  try {
    yield call(apiActions.deleteMessage, messageId);
    yield put(messagesActions.deleteMessageSuccess(messageId));  
  } catch (error) {
    
  }
}


export default function* watchMessagesActions() {
  yield all([
    // takeLatest(messagesActions.getAllMessages, getAllMessages),
    takeEvery(messagesActions.getUserMessagesSubmitted, getUserMessages),
    takeLatest(messagesActions.addMessageSubmitted, addMessage),
    takeLatest(messagesActions.deleteMessageSubmitted, deleteMessage),
  ]);
}
