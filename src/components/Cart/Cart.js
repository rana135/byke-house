import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    const result = [];
    for(const byke of cart){
        console.log(byke);
        const output = <p className='bykeName'>{byke.name}</p>;
        result.push(output)
    }
    return (
        <div>
            
            <p>Cart:-{result}</p>
            <button className='btn'>CHOOSE 1 FOR ME</button><br></br>
            <button className='btn'>CHOOSE AGAIN</button>
            
        </div>
    );
};

export default Cart;