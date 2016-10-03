import React, { Component } from 'react';
import styles from './RightThird.scss';

//components
import Login from './Login.js';
import SignUp from './SignUp.js';
import Cart from './Cart.js';

// var Reqwest = require('reqwest');
export default class RightThird extends React.Component{
  constructor() {
      super();
  };

  

  render(){
    // TODO: Give each FilterBtn a click handler that renders relevant data
    return(
      <div className='right-third-header'>
        <div className='user-logsign'>
          <Login/>
          <SignUp/>
        </div>
        <div className='cart'>
          <Cart/>
        </div>
      </div>
    )
  }
}
