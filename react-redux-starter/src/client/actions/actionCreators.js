export function login_success(data){
  return{
    type: 'USER_LOGIN',
    payload: {...data}
  }
}

export function loginAttempt (){
  return{
    type: 'USER_LOGIN_ATTEMPT'
  }
}

export function loginFailure (err) {
  return{
    type: 'USER_LOGIN_FAILED',
    payload: {
      message: err.message
    }
  }
}

///ADDRESS THESE CHANGES

export const tryLogin = credentials =>
  dispatch => {
    dispatch(loginAttempt());

    return Reqwest('url', { ...credentials})
      .then(data => dispatch(login_success))
      .catch(err => dispatch(loginFailure))
  }
