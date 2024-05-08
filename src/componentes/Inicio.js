// En Inicio.js

import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Carrusel from './carrusel/Carrusel';
import CardList from './body/CardList';

function Inicio({ darkMode, toggleDarkMode, addToCart, cart }) {
  return (
    <div style={{ paddingTop: '61px' }}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} cart={cart} />

      <Carrusel />
      <CardList darkMode={darkMode} addToCart={addToCart} />

      <Footer />
    </div>
  );
}


export default Inicio;
