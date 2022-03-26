import React from 'react';
import './Cart.css'


const Cart = ({chooseOneFromCart,cart, removeAllFromCart}) => {
    return (
        <div className='cart'>
            {
                cart.map(card => <li>{card.name}</li>)
            }
            <button onClick={chooseOneFromCart} className='selected-btn'>CHOOSE 1 FOR ME</button><br></br>
            <button onClick={removeAllFromCart} className='selected-btn'>CHOOSE AGAIN</button><br></br>
        </div>
    );
};

export default Cart;





