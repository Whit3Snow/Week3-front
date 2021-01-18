import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import {Provider} from 'react-redux';//리덕스를 연결시킴
import { applyMiddleware, createStore } from 'redux';//리덕스로부터 apply랑 createStore를 가져온다

import promiseMiddleware from 'redux-promise';//리덕스 promise를 연결시킴
import ReduxThunk from 'redux-thunk';//리덕스 function을 연결시킴
import Reducer from './_reducers';//index.js에 존재하는 리덕스를 가져온다.

//리덕스가 object말고도 다른 형식(promise나 function의 형태로도 받을 수 있도록 만든 것)
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

ReactDOM.render(

  <Provider
    store={createStoreWithMiddleware(Reducer,
        window._REDUX_DEVTOOLS_EXTENSION_&&
        window._REDUX_DEVTOOLS_EXTENSION_()//컴퓨터에서 다운받은 것들을 가져온다.
      )}
  >
    <App />
  </Provider>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
