import { fork, all } from 'redux-saga/effects';
import messagesModule from '../modules/messages';

// The entry point for all the sagas used in the application
export default function* rootSaga() {
  yield all([
    fork(messagesModule.saga),
  ]);
};
