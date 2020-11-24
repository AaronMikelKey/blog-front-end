import React from 'react';

const LoggedIn = (props) => {
  if (props.user) {
    return <a className='button is-light'>{props.user.username}</a>
  }
  else {
    return (
      <div className='buttons'>
        <a className="button is-primary">
          <strong>Sign up</strong>
        </a>
        <a className="button is-light">
          Log in
        </a>
      </div>
      )
  }
}

const Navbar = (props) =>
  <nav className='navbar is-dark' role='navigation' aria-label='main navigation'>
    <div className="navbar-brand">
      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div className='navbar-menu'>
      <div className='navbar-start'>
        <a href='' className='navbar-item'>Home</a>
        <a href='' className='navbar-item'>About</a>
        <a href='' className='navbar-item'>Contact</a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <LoggedIn { ...props }/>
          </div>
        </div>
      </div>
    </div>
  </nav>;

export default Navbar;