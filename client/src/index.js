// Vendor
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// This wraps our Main app component to give access to material-ui stuff
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// This gives our app access to the store
import { Provider } from 'react-redux';

// Core app
import App from './containers/App/App';

// Import our store configuration.
// We've extracted the logic into a configureStore.js
// file to keep this index.js cleaner and more focused on
// what it needs to be concerned with.
import configureStore from './configureStore';

// We need to determine what we want the initial state of
// the application to be.
import initialState from './initialState';

const store = configureStore(initialState);
const MOUNT_NODE = document.querySelector('#root');

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  MOUNT_NODE
);

registerServiceWorker();
