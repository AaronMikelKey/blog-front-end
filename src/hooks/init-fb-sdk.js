const FB_APP_ID = process.env.FB_APP_ID

function InitFacebookSdk() {
  return new Promise(resolve => {
    //initialize FB SDK before starting app
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: FB_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v9.0'
      })
  
      FB.AppEvents.logPageView()

      //auto login if logged into FB already
      window.FB.getLoginStatus(({ authResponse }) => {
        if (authResponse) {
            console.log(authResponse)
            resolve()
        } else {
            console.log('error not logged in')
            resolve()
        }
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
  })
}

export default InitFacebookSdk