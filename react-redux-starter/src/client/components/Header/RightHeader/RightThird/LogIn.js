import React from 'react';
import { Link } from 'react-router';
import styles from './LogIn.scss';

const LogIn = React.createClass({
  render(){
    return (
      <div>
        <Link to={'/login'} className='login-btn'>Log In</Link>
      </div>
    )
  }
});

export default LogIn;
