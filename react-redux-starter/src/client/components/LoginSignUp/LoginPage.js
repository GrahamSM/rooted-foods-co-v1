import React from 'react';
import { Link } from 'react-router';
import Reqwest from 'reqwest';


import styles from './LoginPage.scss';

export default class LoginPage extends React.Component {

    render(){
      return(
        <div>
          <div className="form">
            <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" placeholder="username"/>
              <input type="password" placeholder="password"/>
              <button onClick={this.props.login_success.bind(null)}>login</button>
              <p className="message">Not registered? <Link to={'/signup'}>Create an account</Link></p>
            </form>
          </div>
        </div>
      )
    }

    handleSubmit = (e) =>{
      e.preventDefault();
      // TODO: Set items in redux store
    }

}
