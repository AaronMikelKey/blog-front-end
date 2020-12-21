import React from 'react'
import Navbar from './navbar'
import { InitFacebookSdk, findIfLoggedIn, fbLoaded } from '../hooks/init-fb-sdk'
import 'regenerator-runtime/runtime'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loaded: false }
    findIfLoggedIn()
  }

  componentDidMount() {
    fbLoaded.promise
      .then(() => {
        console.log('FB SDK loaded, attempting to run FB.XFBML.parse()...')
      },
        () => {
          console.log('FB SDK not loaded.  Attempting to load SDK')
          InitFacebookSdk()
        })
      .then(() => {
        this.setState({ loaded: true })
        console.log('State: ' + JSON.stringify(this.state))
      },
        console.log('State not set.')
      )
      .then(() => {
        console.log('Running XFBML.parse()...')
        window.FB.XFBML.parse()
      },
        console.log('Could not parse XFBML')
      )
  }

  render() {
    const title = 'Aaron\'s Blog Login'
    const loaded = this.state.loaded

    if (loaded) {
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
}

export default LoginForm