import React from 'react'
import App from './App'
import { InitFacebookSdk, findIfLoggedIn } from './hooks/init-fb-sdk'
require('./mystyles.scss')
import {render} from 'react-dom'


const title = 'Aaron\'s Blog'

InitFacebookSdk().then(findIfLoggedIn).then(startApp)
 
function startApp() {
  render(
    <App title={title} />,
  document.getElementById('app')
)
}
module.hot.accept()