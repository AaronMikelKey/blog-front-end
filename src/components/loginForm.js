import React from 'react'
import Navbar from './navbar'
import { findIfLoggedIn, fbLoaded } from '../hooks/init-fb-sdk'
import 'regenerator-runtime/runtime'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {loaded: false}
    findIfLoggedIn()
  }

  componentDidMount() {
    fbLoaded.setTimeout(() => {
      this.setState({ loaded: true });
      window.FB.XFBML.parse()
    }, 750);
}

  render() {
    const title = 'Aaron\'s Blog Login'
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
                <div 
                  data-size="large" 
                  data-button-type="continue_with" 
                  data-layout="default" 
                  data-auto-logout-link="false" 
                  data-use-continue-as="false" 
                  data-width=""
                />
            </div>
          </div>
          <div className='column is-2'></div>
        </div>
      </div>
    )
  }
}

export default LoginForm