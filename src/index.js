import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore , applyMiddleware} from "redux";
import logger  from "redux-logger";
// import reduxPromise from "redux-promise-middleware";
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
//reducerler
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, logger)
    // applyMiddleware(reduxPromise(), thunk, logger)
  )
);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store = {store}>
        <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
