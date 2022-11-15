import React from '../../reactproject/node_modules/@types/react';
import ReactDOM from '../../reactproject/node_modules/@types/react-dom/client';
import App from './App';
import Test from './Test';
import {StyleRoot} from 'radium'
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyleRoot>
      <App></App>
      <Test></Test>
      </StyleRoot>
  </React.StrictMode>
);

