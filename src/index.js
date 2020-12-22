import React from 'react'
import App from './App'
require('./mystyles.scss')
import { render } from 'react-dom'


const title = 'Aaron\'s Blog'

  render(
    <div>
      <div id="fb-root"></div>
      <script async defer crossorigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=829109204488429&autoLogAppEvents=1"
        nonce="2dyEbxI3"></script>
      <App title={title} />
    </div>,
    document.getElementById('app')
  )
module.hot.accept()