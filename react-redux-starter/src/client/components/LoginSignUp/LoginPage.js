import React from 'react';
import { Link } from 'react-router';
import Reqwest from 'reqwest';


import styles from './LoginPage.scss';

export default class LoginPage extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    render(){
      return(
        <div>
          <div className="form">
            <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
              <input type="text"  id="username_or_email" placeholder="Usename or Email"/>
              <input type="password" id="password" placeholder="password"/>
              <button onClick={this.props.login_success.bind(null)}>login</button>
              <p className="message">Not registered? <Link to={'/signup'}>Create an account</Link></p>
            </form>
          </div>
        </div>
      )
    }

    handleSubmit = (e) =>{
      e.preventDefault();
      let username_or_email = document.getElementById('username_or_email').value;
      let password = document.getElementById('password').value;
      let user_info = {username_or_email, password}
      Reqwest({
          url: "http://localhost:3000/session",
          type: "json",
          method: "post",
          contentType: 'application/json',
          header: new Headers(),
          data: JSON.stringify(user_info),
          success: (response) => {
            this.context.router.push('/');
            this.props.login_success.bind(null)
          },
          error: function(response) {
          }
      })
    }

}
