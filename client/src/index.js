import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StartPage from './pages/StartPage/components';
import ComposeMessage from './pages/ComposeMessage/components';
import Dashboard from './pages/ManageMessages/components/display/Dashboard';
import createStore from './redux/store/createStore';


// Redux store setup
const initialState = {};
const store = createStore(initialState);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <StartPage />
        </Route>

        <Provider store={store}>
          <Route path='/create'>
            <ComposeMessage />
          </Route>
          <Route path='/manage'>
            <Dashboard />
          </Route>
        </Provider>

      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
