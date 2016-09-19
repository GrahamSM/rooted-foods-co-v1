import React, { Component } from 'react';
import styles from './RightHeader.scss';

//components
import LeftThird from './LeftThird/LeftThird.js'
import RightThird from './RightThird/RightThird.js'
import MidThird from './MidThird/MidThird.js'

// var Reqwest = require('reqwest');
export default class Header extends React.Component{
  constructor() {
      super();
  };

  render(){
    // TODO: Give each FilterBtn a click handler that renders relevant data
    return(
      <div className='right-header-body'>
        <LeftThird/>
        <MidThird/>
        <RightThird/>
      </div>
    )
  }
}
