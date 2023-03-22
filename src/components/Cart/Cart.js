import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'


const Cart = ({ cart, remove }) => {
    const itemsPrice = cart.reduce((prevValue, currentValue) => prevValue + currentValue.qty * currentValue.price, 0);
    const taxPrice = itemsPrice * 0.15;
    const shippingPrice = itemsPrice > 5000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <div>
            {cart.length === 0 && <div className='text-center'>Cart is Empty</div>}
            {cart.map((product) => <div class="card text-dark bg-light mb-3">
                <span class="position-absolute  top-0 start-100 translate-middle badge rounded-pill bg-primary">{product.qty}
                </span>
                <div class="card-header">
                    <div className='d-flex justify-content-between gap-2 align-items-center'>
                        <img className='image' src={product.picture} alt=""></img>
                        <h6>{product.name}</h6>
                        <FontAwesomeIcon onClick={() => remove(product)}
                            icon={faTrashCan}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            )
            }

            {
                cart.length !== 0 && <div className='cart p-1'>
                    <div className="d-flex justify-content-between align-content-center">
                        <div>Items Price</div>
                        <div>${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className="d-flex justify-content-between align-content-center">
                        <div>Tax Price</div>
                        <div>${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className="d-flex justify-content-between align-content-center">
                        <div>Shipping Price</div>
                        <div>${shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className="d-flex justify-content-between align-content-center">
                        <div className='fw-bold'>Total Price</div>
                        <div>${totalPrice.toFixed(2)}</div>
                    </div>
                    <hr />
                    <div className="d-grid gap-2 mb-3">
                        <button className="btn btn-primary" type="button" onClick={() => alert('Implement Checkout!')}>Checkout</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Cart;





