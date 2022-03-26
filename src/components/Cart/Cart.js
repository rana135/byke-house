import React from 'react';
import './Cart.css'
import ReactModal from '../ReactModal/ReactModal';

const Cart = ({chooseOneFromCart,cart, removeAllFromCart}) => {
    return (
        <div className='cart'>
            {
                cart.map(card => <li>{card.name}</li>)
            }
            {/* <ReactModal></ReactModal><br></br> */}
            <button onClick={chooseOneFromCart}>CHOOSE 1 FOR ME</button><br></br>
            <button onClick={removeAllFromCart} className='selected-btn'>CHOOSE AGAIN</button><br></br>
        </div>
    );
};

export default Cart;





