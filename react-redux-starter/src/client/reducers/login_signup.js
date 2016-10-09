export default function login(state=[], action){
  switch(action.type){
    case 'USER_LOGIN_ATTEMPT' :
      return Object.assign({}, state, { loggedIn: true });
    default:
      return state
  }
}
