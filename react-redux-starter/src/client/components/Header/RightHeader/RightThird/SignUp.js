import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './SignUp.scss';

export default class SignUp extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <Link to={'/signup'} className='signup-btn'>Sign Up</Link>
      </div>
    )
  }
};
