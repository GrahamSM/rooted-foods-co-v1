import Reqwest from 'reqwest';

// TODO: USER FETCH

export function login_success(){
  return{
    type: 'USER_LOGIN'
  }
}

export function sign_up_success(){
  return{
    type: 'USER_SIGN_UP'
  }
}

export function sign_up_failure (err){
  return{
    type: 'USER_SIGN_UP_FAILED',
    payload: {
      message: err.message
    }
  }
}

export function loginAttempt(data){
  return{
    type: 'USER_LOGIN_ATTEMPT',
    payload: {...data}
  }
}

export function loginFailure(err){
  return{
    type: 'USER_LOGIN_FAILED',
    payload: {
      message: err.message
    }
  }
}

export function tryLogin(user_info){
  return dispatch => {
    dispatch(loginAttempt(user_info));
    return Reqwest({
      url: "http://localhost:3000/session",
      type: "json",
      method: "post",
      contentType: 'application/json',
      header: new Headers(),
      data: JSON.stringify(user_info),
      success: (data => dispatch(login_success)),
      error: (err => dispatch(loginFailure))
    })
  }
}

export function trySignUp(user_info){
  return dispatch => {
    dispatch(loginAttempt(user_info));
    return Reqwest({
      url: "http://localhost:3000/users",
      type: "json",
      method: "post",
      contentType: 'application/json',
      header: new Headers(),
      data: JSON.stringify(user_info),
      success: (response) => {
        dispatch(sign_up_success)
      },
      error: (err) => {
        dispatch(sign_up_failure)
      }
    })
  }
}
