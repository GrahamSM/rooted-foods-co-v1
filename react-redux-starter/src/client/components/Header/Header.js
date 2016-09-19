import React, { Component } from 'react';
import styles from './Header.scss';

//components
import LogIn from './RightHeader/RightThird/LogIn.js';
import SignUp from './RightHeader/RightThird/SignUp.js';
import RightHeader from './RightHeader/RightHeader.js';

// var Reqwest = require('reqwest');
export default class Header extends React.Component{
  constructor() {
      super();
  };

  render(){
    // TODO: Give each FilterBtn a click handler that renders relevant data
    return(
      <div className='header-body'>
        <div className='left-header'></div>
        <div className='middle-header'></div>
        <div className='right-header'>
          <RightHeader/>
        </div>
      </div>
    )
  }
}
