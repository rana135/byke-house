import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div>
            <p>Cart:- {cart.length}</p>
            
        </div>
    );
};

export default Cart;