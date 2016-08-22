import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import { initialStore } from './state/store'
import formReducer from './reducers'
import './index.css';

const store = createStore(formReducer, initialStore)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
