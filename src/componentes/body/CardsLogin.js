import React from 'react';
import { Link } from 'react-router-dom';

function CardsLogin({ item, darkMode, toggleDarkMode }) {
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
                    <button type="button" className="btn btn-outline-warning">Agregar al carrito</button>
                    <Link to={`/detalles_producto/${item.id}`}>
                        <button type="button" className="btn btn-outline-info">Más detalles</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CardsLogin;
