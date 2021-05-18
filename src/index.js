import React from 'react'
import App from './App'
require('./mystyles.scss')
import { render } from 'react-dom'


const title = 'Aaron\'s Blog'

  render(
    <div>
      <App title={title} />
    </div>,
    document.getElementById('app')
  )
module.hot.accept()