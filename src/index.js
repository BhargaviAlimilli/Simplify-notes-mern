import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.css';
import root from './reducers/rootReducers'
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {composeWithDevTools} from 'redux-devtools-extension'
import { Provider } from 'react-redux';
import reduxThunk from "redux-thunk"

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const theStore= applyMiddleware(reduxThunk)(createStore)(root, initialState ,composeWithDevTools())

// const theStore= createStore(root,composeWithDevTools())

ReactDOM.render(
  <Provider store= {theStore} >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
