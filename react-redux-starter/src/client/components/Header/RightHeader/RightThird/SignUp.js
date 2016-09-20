import React from 'react';
import { Link } from 'react-router';
import styles from './SignUp.scss';

const SignUp = React.createClass({
  render(){
    return (
      <div>
        <Link to={'/signup'} className='signup-btn'>Sign Up</Link>
      </div>
    )
  }
});

export default SignUp;
