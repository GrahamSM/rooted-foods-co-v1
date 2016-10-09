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
              <input type="text"  id="username_or_email" placeholder="Usename or Email"/>
              <input type="password" id="password" placeholder="password"/>
              <button onClick={this.handleSubmit}>login</button>
              <p className="message">Not registered? <Link to={'/signup'}>Create an account</Link></p>
            </form>
          </div>
        </div>
      )
    }

    //TODO: SHOULDNT HAPPEN IN HERE SHOULD HAPPEN IN ACTIONS
    handleSubmit = (e) => {
      e.preventDefault();
      let username_or_email = document.getElementById('username_or_email').value;
      let password = document.getElementById('password').value;
      let user_info = {username_or_email, password}
      this.props.tryLogin.bind(null, user_info);
    }

}
