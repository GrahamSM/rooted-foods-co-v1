import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

//Must preload everything into here!
function mapStateToProps(state){
  const { login_signup } = state;
  return {
    loggedIn: login_signup.loggedIn || false
  }
}

function mapDispatchToProps(dispatch){
   return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
