import React from 'react';
import ReactDOM from 'react-dom';
import './services/firebase';
import { RouterApp } from './router';

ReactDOM.render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>,
  document.getElementById('root')
)
