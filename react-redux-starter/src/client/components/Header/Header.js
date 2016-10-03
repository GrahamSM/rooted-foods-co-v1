import React from 'react';
import styles from './Header.scss';

//components
import LogIn from './RightHeader/RightThird/LogIn.js';
import SignUp from './RightHeader/RightThird/SignUp.js';
import RightHeader from './RightHeader/RightHeader.js';
import Reqwest from 'reqwest';


// var Reqwest = require('reqwest');
export default class Header extends React.Component{

  componentWillMount = () =>{
    Reqwest({
        url: "http://localhost:3000/users/getcurrentuser",
        type: "json",
        method: "get",
        contentType: 'application/json',
        header: new Headers(),
      }).then(response => {

      }).catch((error) => {
        debugger;
      })
    }

  render(){
    // TODO: Give each FilterBtn a click handler that renders relevant data
    return(
      <div className='header-body'>
        <div className='left-header'></div>
        <div className='middle-header'></div>
        <div className='right-header'>
          <RightHeader />
        </div>
      </div>
    )
  }
}
