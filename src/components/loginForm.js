import React from 'react'
import Navbar from './navbar'
import 'regenerator-runtime/runtime'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleFacebookLogin = this.handleFacebookLogin.bind(this)
  }


  async handleFacebookLogin(e) {
    e.preventDefault()
    console.log('facebook login')
    const res = await fetch('https://aaron-key-blog-api.herokuapp.com/auth/facebook', {
      
    })
    if (res.ok) {
      const response = await res.json();
      console.log(res)
      console.log(response)
      return Promise.resolve(response)
    } else {
      console.log(res)
      return Promise.reject('failed')
    }
  }


  render() {
    return (
      <div>
        <Navbar />
        <div className='columns'>
          <div className='column is-2'></div>
          <div className='field column is-two-thirds'>
            <div className='has-text-centered my-6'>
              Log In <br /> Not a member yet? <a href=''>Sign up!</a>
            </div>
            <div>
              <a href='https://aaron-key-blog-api.herokuapp.com/auth/facebook'> Facebook login
              </a>
                <button className='button is-link' onClick={this.handleFacebookLogin}>Login with Facebook</button>
            </div>
          </div>
          <div className='column is-2'></div>
        </div>
      </div>
    )
  }
}

export default LoginForm