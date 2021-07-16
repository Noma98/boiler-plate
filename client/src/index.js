import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import './index.css';
import 'antd/dist/antd.css';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import rootReducer from './_reducers/index';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
