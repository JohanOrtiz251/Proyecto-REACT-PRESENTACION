import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ item, darkMode, toggleDarkMode, addToCart }) {
    const handleAddToCart = () => {
        console.log("Agregando al carrito:", item); // Agregamos un console.log para verificar si se está pasando el producto correctamente
        addToCart(item);
    };

    return (
        <div className={`card2 ${darkMode ? 'dark' : ''}`}>
            <img src={item.image} alt='Logo de Laptop' />
            <div>
                <h5>{item.title}</h5>
                <p className='marca'>Marca: {item.marca}</p>
                <p className='fecha'>Fecha de Lanzamiento: {item.fechaLanzamiento}</p>
                <div className='caracteristicas'>
                    <p><strong>Procesador:</strong> {item.procesador}</p>
                    <p><strong>RAM:</strong> {item.ram}</p>
                    <p><strong>Almacenamiento:</strong> {item.almacenamiento}</p>
                    <p><strong>Pantalla:</strong> {item.pantalla}</p>
                    <p><strong>Sistema Operativo:</strong> {item.sistemaOperativo}</p>
                </div>
                <br />
                <p className='price'>Precio: {item.precio}</p>
                <div className="buttons">
                    <button type="button" className="btn btn-outline-warning" onClick={handleAddToCart}>Agregar al carrito</button>
                    {/* El botón "Más detalles" puede seguir funcionando como antes */}
                    <Link to={`/detalles/${item.id}`}>
                        <button type="button" className="btn btn-outline-info">Más detalles</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cards;
