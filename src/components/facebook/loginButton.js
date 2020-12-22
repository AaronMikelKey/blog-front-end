import React from 'react'




const FbLoginButton = () => {
  //Checks login status and fetches api if user is logged in to FB and authorizes the app
const logInToFacebook = () => {
  FB.login(function (response) {
    if (response.status === 'connected') {
      apiAccount.FbApiAuth(response.authResponse.id, response.authResponse.accessToken)
    } else {
      console.log('login error')
    }
  })
}
    return (
    <div className='button is-link is-medium is-fullwidth' onClick={logInToFacebook}>
      <span className="icon">
        <i className="far fa-facebook"></i>
      </span>
      <span>Log in With Facebook</span>
    </div>
    )
}

export default FbLoginButton