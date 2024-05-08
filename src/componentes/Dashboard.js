import React from 'react';
import CardList from './body/CardList';
import Footer from './footer/Footer';
import Carrusel from './carrusel/Carrusel';
import HeaderInicio from './HeaderInicio';

function Dashboard({ darkMode, toggleDarkMode, user, logout , cart, addToCart}) {
    return (
        <div style={{ paddingTop: '60px' }}>
            <HeaderInicio darkMode={darkMode} toggleDarkMode={toggleDarkMode} user={user} logout={logout} cart={cart}/>
            <Carrusel />
            <CardList darkMode={darkMode} toggleDarkMode={toggleDarkMode}addToCart={addToCart}/>
            <Footer />
        </div>
    );
}

export default Dashboard;
