import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { history, initFacebookSdk } from './hooks'
require('./mystyles.scss')


const title = 'Aaron\'s Blog'

initFacebookSdk().then(startApp)
 
function startApp() {
  render(
    <App title={title} />,
  document.getElementById('app')
)
}
module.hot.accept()