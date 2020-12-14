import React from 'react'
import App from './App'
import { initFacebookSdk } from './hooks/init-fb-sdk'
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