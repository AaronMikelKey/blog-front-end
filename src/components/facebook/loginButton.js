import React from 'react'




const FbLoginButton = (props) => {

    return (
    <div className='button is-link is-medium is-fullwidth' onClick={props.onClick}>
      <span className="icon">
        <i className="far fa-facebook"></i>
      </span>
      <span>Log in With Facebook</span>
    </div>
    )
}

export default FbLoginButton