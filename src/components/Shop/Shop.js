import React, { useEffect, useState } from 'react';
import Byke from '../Byke/Byke';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [bykes, setBykes] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setBykes(data))
    },[])
    const handleAddToCart =(byke)=>{
        console.log(byke);
        const newCart = [...cart, byke]
        setCart(newCart);
    }
    return (
        <div>
            <h1 className='Project-title'>Byke House</h1>
            <div className='shop-container'>
            <div className='byke-container'>
                {
                    bykes.map(byke => <Byke
                    key={byke.id}
                    byke={byke}
                    handleAddToCart={handleAddToCart}
                    ></Byke>)
                }
            </div>
            <div className='cart-container'>
                <h2>Selected Byke</h2>
                <Cart cart={cart}></Cart>
            </div>
            </div>
        </div>
    );
};

export default Shop;