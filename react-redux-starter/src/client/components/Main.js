import React from 'react';
import { Link } from 'react-router';
import Header from './Header/Header.js'

const Main = React.createClass({
  render(){
    ///MAKING SURE WE HAVE THE PROPS, SO WE CAN EXPLICITLY PASS IT DOWN TO HEADER, SINCE IT IS NOT A CHILD COMPONENT
    const { loggedIn } = this.props;
    return (
      <div>
        <Header loggedIn = { loggedIn } />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
