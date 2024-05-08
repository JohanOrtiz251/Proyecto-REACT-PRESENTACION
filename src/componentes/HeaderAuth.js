// HeaderAuth.js
import React from 'react';

function HeaderAuth({ user }) {
  return (
    <div>
      <h1>Header (Auth)</h1>
      {user && (
        <div>
          <p>Bienvenido, {user.name} ({user.email})!</p>
          <a href="/cart">Ir al carrito de compra</a>
        </div>
      )}
    </div>
  );
}

export default HeaderAuth;
