import React from 'react';
import { Link } from 'react-router';
import styles from './Cart.scss';

const Cart = React.createClass({
  render(){
    return (
      <div>
        <button className='cart-btn'>Cart</button>
      </div>
    )
  }
});

export default Cart;
