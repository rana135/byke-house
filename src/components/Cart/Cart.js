import React from 'react';
import './Cart.css'
import ReactModal from '../ReactModal/ReactModal';

const Cart = ({cart}) => {
    return (
        <div className='cart'>
            {
                cart.map(card => <li>{card.name}</li>)
            }
            <ReactModal></ReactModal><br></br>
            <button className='selected-btn'>CHOOSE AGAIN</button><br></br>
            
        </div>
    );
};

export default Cart;





