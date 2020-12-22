import React from 'react'
import App from './App'
import { InitFacebookSdk, fbLoaded } from './hooks/init-fb-sdk'
require('./mystyles.scss')
import {render} from 'react-dom'


const title = 'Aaron\'s Blog'

startApp()
 
function startApp() {
  render(
    <App title={title} />,
  document.getElementById('app')
)
}
module.hot.accept()