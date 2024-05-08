// CardList.js
import React from 'react';
import CardsLogin from './CardsLogin';
import data from './data';
import './card.css';

function CardList({ darkMode }) {
    const cards = data.map(item => (
        <CardsLogin key={item.id} item={item} darkMode={darkMode} />
    ));

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className='divCards'>
                {cards}
            </div>
        </div>
    );
}

export default CardList;
