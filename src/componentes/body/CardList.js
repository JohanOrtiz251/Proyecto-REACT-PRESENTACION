import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import data from './data';
import './card.css';

function CardList({ darkMode, addToCart }) {
    const [cart] = useState([]);

    const cards = data.map(item => (
        <Cards key={item.id} item={item} darkMode={darkMode} addToCart={addToCart} />
    ));

    useEffect(() => {
        console.log("Carrito actualizado:", cart);
    }, [cart]);

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className='divCards'>
                {cards}
            </div>
        </div>
    );
}


export default CardList;
