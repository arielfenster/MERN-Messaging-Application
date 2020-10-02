import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer';
import rootSaga from '../saga';

const createStore = (initialState = []) => {
  
  // Connect the sagas logic to the store
  const sagasMiddleware = createSagaMiddleware({ });

  // Create a store with all the reducers and the middlewares
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagasMiddleware],
    preloadedState: initialState,
  });

  // Initiate the sagas
  sagasMiddleware.run(rootSaga);
  
  return store;
}

export default createStore;
