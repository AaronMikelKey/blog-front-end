import React from 'react';
import { NavLink, Link } from "react-router-dom";

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
        <Link className="button is-light" to='/login'>
          Log in
        </Link>
      </div>
      )
  }
}

const Navbar = (props) =>
  <nav className='navbar is-dark' role='navigation' aria-label='main navigation'>
    <div className="navbar-brand">
      {/* Will need to fix this with some js later.  Part of bulma's mobile formatting */}
      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div className='navbar-menu'>
      <div className='navbar-start'>
        <NavLink className='navbar-item' to='/'>Home</NavLink>
        <NavLink className='navbar-item' to='/about'>About</NavLink>
        <NavLink className='navbar-item' to='/contact'>Contact</NavLink>
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