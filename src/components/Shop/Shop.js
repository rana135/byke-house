import React, { useEffect, useState } from 'react';
import Byke from '../Byke/Byke';
import './Shop.css'

const Shop = () => {
    const [bykes, setBykes] = useState([])
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setBykes(data))
    },[])
    return (
        <div>
            <h1 className='Project-title'>Byke House</h1>
            <div className='shop-container'>
            <div className='byke-container'>
                {
                    bykes.map(byke => <Byke
                    key={byke.id}
                    byke={byke}
                    ></Byke>)
                }
            </div>
            <div className='cart-container'>
                <h1>cart</h1>
            </div>
            </div>
        </div>
    );
};

export default Shop;