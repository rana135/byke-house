import React from 'react';
import './Cart.css'
import ReactModal from '../ReactModal/ReactModal';

const Cart = ({cart}) => {
    return (
        <div className='carting'>
            {
                cart.map(card => <li>{card.name}</li>)
            }
            <button className='selected-btn'>CHOOSE 1 FOR ME</button><br></br>
            <ReactModal className='selected-btn btn-sm'></ReactModal>
        </div>
    );
};

export default Cart;





