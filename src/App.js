import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Inicio from './componentes/Inicio';
import Login from './componentes/Login';
import Registro from './componentes/Registro';
import Carrusel from './componentes/carrusel/Carrusel';
import Dashboard from './componentes/Dashboard';
import CardDetalles from './componentes/body/CardDetalles';
import Cart from './componentes/cart/Cart';

function App() {
  
  const [darkMode, setDarkMode] = useState(true);
  const [user] = useState(null);
  const [cart, setCart] = useState([]);

  // Función para cambiar entre el modo claro y oscuro
  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  const addToCart = (product) => {
    // Verificar si el producto ya está en el carrito
    const isProductInCart = cart.some(item => item.id === product.id);

    // Si el producto no está en el carrito, agrégalo
    if (!isProductInCart) {
      setCart(prevCart => [...prevCart, product]);
    } else {
      console.log("El producto ya está en el carrito.");
    }
  };

  return (
    <BrowserRouter>
      <div className={darkMode ? 'dark' : ''}>
        <Routes>
          <Route 
            exact 
            path='/' 
            element={<Inicio darkMode={darkMode} toggleDarkMode={toggleDarkMode} user={user} addToCart={addToCart} cart={cart} />}
          /> 
          <Route 
            exact 
            path='/login' 
            element={<Login darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
          />
          <Route 
            exact 
            path='/registro' 
            element={<Registro darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
          />
          <Route
            exact
            path='/carrusel'
            element={<Carrusel />}
          />
          <Route 
            exact
            path='/dashboard'
            element={<Dashboard darkMode={darkMode} toggleDarkMode={toggleDarkMode} user={user} addToCart={addToCart} cart={cart} />}
          />
          <Route
            exact
            path='/detalles/:id'
            element={<CardDetalles darkMode={darkMode} toggleDarkMode={toggleDarkMode} addToCart={addToCart} cart={cart} />}
          />
          <Route 
            exact
            path='/cart'
            element={<Cart cart={cart} setCart={setCart}  />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
