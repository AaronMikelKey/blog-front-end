import React from 'react'
import App from './App'
import { InitFacebookSdk, findIfLoggedIn } from './hooks/init-fb-sdk'
require('./mystyles.scss')
import {render} from 'react-dom'


const title = 'Aaron\'s Blog'

InitFacebookSdk().then(
  console.log('FB SDK Initialized, checking login status'),
  findIfLoggedIn()
  ).then(
    console.log('Starting App'),
    startApp
    )
 
function startApp() {
  render(
    <App title={title} />,
  document.getElementById('app')
)
}
module.hot.accept()