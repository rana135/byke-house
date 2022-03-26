import React, { useState } from 'react';
import ReactModal from '../ReactModal/ReactModal';

import './Cart.css'

const Cart = ({cart}) => {
    const [remove, setRemove] = useState([])
    const result = [];
    for(const byke of cart){
        console.log(byke);
        const output = byke.name;
        result.push(output)
    }
    return (
        <div>
            
            <p>Cart:-{result}</p>
            <button className='btn'>CHOOSE 1 FOR ME</button><br></br>
            <ReactModal result={result}></ReactModal>
        </div>
    );
};

export default Cart;