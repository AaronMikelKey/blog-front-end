import React, { useState } from 'react'
import Navbar from './navbar'
import { useHistory, Redirect } from 'react-router-dom'
import { apiAccount } from '../hooks/apiAccount'

const Logout = () => {
  const history = useHistory()
  const [redirect, setRedirect] = useState(false)
  const handleLogout = () => {
    apiAccount.Logout
    setRedirect(true)
  }
  if (redirect !== true) {
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
              <button className='button is-medium' onClick={ handleLogout() }>Log out</button>
              <button className='button is-medium' onClick={ history.goBack() }>Cancel</button>
          </div>
          </article>
          <div className='column is-2'></div>
        </div>
      </div>
    )
  } else {
    return <Redirect push to="/"/>
  }
  }

export default Logout