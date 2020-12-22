import React from 'react'
import Navbar from './navbar'
import { InitFacebookSdk, findIfLoggedIn, fbLoaded } from '../hooks/init-fb-sdk'
import 'regenerator-runtime/runtime'
import { FbLoginButton } from './facebook/loginButton'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loaded: false }
    findIfLoggedIn()
    this.handleSetState = this.handleSetState.bind(this)
  }

  //Ensures FB SDK is loaded so we can use FB login button, adds 1 second to load time also.
  handleSetState() {
    fbLoaded.promise
      .then(() => {
        console.log('FB SDK loaded, attempting to run FB.XFBML.parse()...')
      },
        () => {
          console.log('FB SDK not loaded.  Attempting to load SDK')
          InitFacebookSdk()
        })
      .then(() => {
        console.log('Running XFBML.parse()...')
        window.FB.XFBML.parse()
      },
        console.log('Could not parse XFBML')
      )
      this.setState({loaded: true})
  }


  render() {
    const title = 'Aaron\'s Blog Login'
    const loaded = this.state.loaded

    if (!loaded) {
      this.handleSetState()
      return (
        <div>
          <Navbar />
          <div>Loading...</div>
        </div>
      )
    } else {
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
                  className="fb-login-button"
                  data-size="large"
                  data-button-type="continue_with"
                  data-layout="default"
                  data-auto-logout-link="false"
                  data-use-continue-as="false"
                />
                <FbLoginButton />
              </div>
            </div>
            <div className='column is-2'></div>
          </div>
        </div>
      )
    }
  }
}

export default LoginForm