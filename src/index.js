import React from 'react'
import App from './App'
import InitFacebookSdk from './hooks/init-fb-sdk'
require('./mystyles.scss')


const title = 'Aaron\'s Blog'

InitFacebookSdk().then(startApp)
 
function startApp() {
  render(
    <App title={title} />,
  document.getElementById('app')
)
}
module.hot.accept()