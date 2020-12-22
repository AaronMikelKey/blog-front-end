import React from 'react'
import { useHistory } from 'react-router-dom'
const history = useHistory()
import Navbar from './navbar'
import { apiAccount } from '../hooks/apiAccount'

class Logout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loggedOut: false }
    this.handleLogout = this.handleLogout.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }
  

  handleLogout() {
    apiAccount.Logout()
    this.setState({ loggedOut: true })
    history.push('/')
  }

  handleCancel() {
    this.props.history.goBack()
  }
  

  render() {
    return (
      <div>
        <Navbar />
        <div className='columns'>
          <div className='column is-2'></div>
          <article className="message is-warning my-6 column is-two-thirds">
            <div className="message-header">
              <p>Are you sure you want to log out?</p>
            </div>
            <div className="message-body has-text-centered">
              This will only log you out from this website.
              <br />
              <button className='button is-medium' onClick={ this.handleLogout }>Log out</button>
              <button className='button is-medium' onClick={ this.handleCancel }>Cancel</button>
          </div>
          </article>
          <div className='column is-2'></div>
        </div>
      </div>
    )
  }
}

export default Logout