import React from 'react'
import App from './App'
import { InitFacebookSdk } from './hooks/init-fb-sdk'
require('./mystyles.scss')
import {render} from 'react-dom'


const title = 'Aaron\'s Blog'

InitFacebookSdk().then(startApp)
 
function startApp() {
  console.log('starting app...')
  render(
    <App title={title} />,
  document.getElementById('app')
)
}
module.hot.accept()