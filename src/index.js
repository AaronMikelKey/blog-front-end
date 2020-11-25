import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
require('./mystyles.scss');

const title = 'Aaron\'s Blog';
 
ReactDOM.render(
    <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();