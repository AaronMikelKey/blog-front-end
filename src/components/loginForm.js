import React from 'react'
import Navbar from './navbar'
import 'regenerator-runtime/runtime'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {username: '', password: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFacebookLogin = this.handleFacebookLogin.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  async handleSubmit(e) {
    e.preventDefault()
    console.log('State: ' + JSON.stringify(this.state))
    const res = await fetch('https://aaron-key-blog-api.herokuapp.com/auth/login', {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    if (res.ok) {
      const response = await res.json();
      console.log(res)
      console.log(response)
      return Promise.resolve(response)
    } else {
      return Promise.reject('Error in promise')
    }
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
            <form>
              <label htmlFor='username' className='label'>Username:</label>
              <div className='control'>
                <input className='input' type='text' name='username' value={this.state.value} onChange={this.handleChange}></input>
              </div>
              <label htmlFor='password' className='label'>Password</label>
              <div className='control'>
                <input className='input' type='password' name='password' value={this.state.value} onChange={this.handleChange}></input>
              </div>
              <div className="control mt-3">
                <button className="button is-link" value='Submit' onClick={this.handleSubmit}>Submit</button>
              </div>
            </form>
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