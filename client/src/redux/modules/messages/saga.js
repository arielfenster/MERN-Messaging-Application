import apiActions from '../../../api';
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { actions as messagesActions } from './slice';
import { actions as errorsActions } from '../errors/slice';

// @@@@@ TODO: ADD A ERRORS SLICE AND REDUCER TO HANDLE THE ERRORS RETURNED


function* getAllMessages() {
  try {
    const response = yield call(apiActions.getAllMessages);
    yield put(messagesActions.getAllMessagesSuccess(response.data));
  } catch (error) {
    yield put(errorsActions.getAllMessagesFailed(JSON.parse(error.message)));
  }
}

function* getUserMessages(action) {
  const userId = action.payload;

  try {
    const response = yield call(apiActions.getUserMessages, userId);
    yield put(messagesActions.getUserMessagesSuccess(response.data));
  } catch (error) {
    yield put(errorsActions.getUserMessagesFailed(JSON.parse(error.message)));
  }
}

function* addMessage(action) {
  const message = action.payload;

  try {
    const response = yield call(apiActions.addMessage, message);
    yield put(messagesActions.addMessageSuccess(response.data));
  } catch (error) {
    yield put(errorsActions.addMessageFailed(JSON.parse(error.message)));
  }
}

function* deleteMessage(action) {
  const messageId = action.payload;

  try {
    yield call(apiActions.deleteMessage, messageId);
    yield put(messagesActions.deleteMessageSuccess(messageId));  
  } catch (error) {
    yield put(errorsActions.deleteMessageFailed(JSON.parse(error.message)));
  }
}


export default function* watchMessagesActions() {
  yield all([
    takeLatest(messagesActions.getAllMessagesSubmitted, getAllMessages),
    takeEvery(messagesActions.getUserMessagesSubmitted, getUserMessages),
    takeLatest(messagesActions.addMessageSubmitted, addMessage),
    takeLatest(messagesActions.deleteMessageSubmitted, deleteMessage),
  ]);
}
