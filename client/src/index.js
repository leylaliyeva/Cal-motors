import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from "./serviceWorker";
import {createStore} from 'redux';
import {Provider} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "./reducers";


//store

const store = createStore(rootReducer,composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> ,
  document.getElementById('root')
);

serviceWorker.unregister();

