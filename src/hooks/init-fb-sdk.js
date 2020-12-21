import { apiAccount } from './apiAccount'

const FB_APP_ID = process.env.FB_APP_ID

export const InitFacebookSdk = () => {
  return new Promise(() => {
    //initialize FB SDK before starting app
    console.log('Initializing FB SDK')
    resolve(
    window.fbAsyncInit = () => {
      FB.init({
        appId: FB_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v9.0',
        status: true
      })

    },
    //load FB sdk script
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk')))
    reject(error => {return error})
  })
}

export const findIfLoggedIn = () => {
  return new Promise((resolve, reject) => {
    window.FB.getLoginStatus((response) => {

      /*  response = 
          {status: ['connected', 'not_authorized', 'unknown'],
            authResponse : {
              accessToken: '...',
              expiresIn: '...',
              signedRequest: '...',
              userID: '...'          } }   */
      console.log(response)
      if (response.status === 'connected') {
        resolve(
          console.log('Connected: ' + response),
          //if user is logged into FB, and authorized locally
          apiAccount.FbApiAuth(response.authResponse.userID, response.authResponse.accessToken)
        )
      } else {
        reject(console.log('error not logged in'))
      }
    })
  })
}