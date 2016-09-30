import React from 'react';
import { Link } from 'react-router';
import Reqwest from 'reqwest';

import styles from './SignUpPage.scss';

export default class SignUpPage extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    handleSubmit = (e) =>{
      e.preventDefault();
      let username = document.getElementById('username').value;
      let password = document.getElementById('password').value;
      let password_confirmation = document.getElementById('confirm_password').value;
      let email = document.getElementById('email').value;
      let user = {username, password, password_confirmation, email}
      Reqwest({
          url: "http://localhost:3000/users",
          type: "json",
          method: "post",
          contentType: 'application/json',
          header: new Headers(),
          data: JSON.stringify(user),
          success: (response) => {
            this.context.router.push('/');
          },
          error: function(response) {
          }
      })
    }

    render(){
      return(
        <div>
        <div className="form">
            <form className="register-form" onSubmit={this.handleSubmit.bind(this)}>
              <input id="email" type="text" placeholder="email address"/>
              <input id="username" type="text" placeholder="username"/>
              <input id="password" type="password" placeholder="password"/>
              <input id="confirm_password" type="password" placeholder="confirm_password"/>
              <button>create</button>
              <p className="message">Already registered? <Link to={'/login'}>Login</Link></p>
            </form>
          </div>
        </div>
      )
    }
}
