import React from 'react';
import { Link } from 'react-router';
import Reqwest from 'reqwest';

import styles from './SignUpPage.scss';

export default class SignUpPage extends React.Component {

    handleSubmit = (e) =>{
      e.preventDefault();
      let username = document.getElementById('username').value;
      let password = document.getElementById('password').value;
      let email = document.getElementById('email').value;
      // TODO: Set items in redux store
    }

    render(){
      return(
        <div>
        <div className="form">
            <form className="register-form" onSubmit={this.handleSubmit.bind(this)}>
              <input id="username" type="text" placeholder="username"/>
              <input id="password" type="password" placeholder="password"/>
              <input id="email" type="text" placeholder="email address"/>
              <button>create</button>
              <p className="message">Already registered? <Link to={'/login'}>Login</Link></p>
            </form>
          </div>
        </div>
      )
    }
}
