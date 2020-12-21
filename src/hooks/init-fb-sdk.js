import { apiAccount } from './apiAccount'

const FB_APP_ID = process.env.FB_APP_ID

export const InitFacebookSdk = () => {
  return new Promise(() => {
    //initialize FB SDK before starting app
    window.fbAsyncInit = () => {
      FB.init({
        appId: FB_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v9.0',
        status: true
      })
  
    }
    //load FB sdk script
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }).then(
      //auto login if logged into FB already, same as GET /auth/facebook on server
      FB.getLoginStatus((response) => {

        /*  response = 
            {status: ['connected', 'not_authorized', 'unknown'],
              authResponse : {
                accessToken: '...',
                expiresIn: '...',
                signedRequest: '...',
                userID: '...'          } }   */

        if (response.status === 'connected') {
            console.log(response)
            //if user is logged into FB, and authorized locally
            apiAccount.FbApiAuth(authResponse.userID, authResponse.accessToken)
        } else {
            console.log('error not logged in')
        }
    })
  ).catch(error => {
    console.log(error)
  })
}