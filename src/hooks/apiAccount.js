export const apiAccount = {
FbApiAuth,

}

//Base API URL for requests
const baseUrl = 'https://aaron-key-blog-api.herokuapp.com'


//Authenticate user with local API and send token for other user requests.
const FbApiAuth = async (userID, token) => {
  const user = {
    token: token,
    userID: userID
  }
  const response = await fetch(baseUrl + '/auth/facebook', {
    method: 'POST',
    credentials: 'include',
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  if (response.ok) {
    const res = await res.json()
    return Promise.resolve(res)
  } else {
    return Promise.reject('Error.')
  }
}