import React from 'react';
import { Provider } from 'react-redux';
import ComposeMessage from './pages/ComposeMessage/components';
import Control from './pages/ManageMessages/components/display/Control';
import createStore from './redux/store/createStore';

const initialState = [];

const store = createStore(initialState);

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <ComposeMessage /> */}
        <Control />
      </div>
    </Provider>
  );
}

export default App;
