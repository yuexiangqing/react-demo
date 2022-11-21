import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from 'redux'
import CounterReducer from './store/reducer/Counter.reducer'


const store = createStore(CounterReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App></App>
  </React.StrictMode>
);

