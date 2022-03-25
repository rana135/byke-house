import React from 'react';
import './Byke.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Byke = ({byke, handleAddToCart}) => {
    const {picture, name, id, price} = byke;
    return (
        <div className='byke-details'>
            <img src={picture} alt=""></img>
            <div className='byke-info'>
                <h3 className='byke-name'><strong>{name}</strong></h3>
                <p><strong>Price:- </strong>{price} TK</p>
                <p><strong>ID:- </strong>{id}</p>
            </div>
            <button onClick={()=>handleAddToCart(byke)} className='btn-field'>
                <p className='addToCut'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Byke;