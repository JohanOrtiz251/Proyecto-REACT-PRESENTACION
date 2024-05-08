import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import laptops from './data';

export default function CardDetallesLogin({ darkMode, toggleDarkMode }) {
  const { id } = useParams();
  const laptop = laptops.find(laptop => laptop.id === parseInt(id));
  const [selectedProduct, setSelectedProduct] = useState(laptop);

  // Simplemente una lista de productos recomendados para demostración
  const recommendedProducts = laptops.filter(product => product.id !== parseInt(id)).slice(0, 8);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  if (!laptop) {
    return <div>Laptop no encontrado</div>;
  }

  

  return (
    <div className={`${darkMode ? 'bg-gray-800 dark:bg-gray-900 pt-14' : 'bg-white pt-14'} min-h-screen`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${darkMode ? 'bg-gray-800 dark:bg-gray-900' : 'bg-white'}`}>
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="rounded-lg overflow-hidden mb-4">
              <img className="w-full" src={selectedProduct.image} alt={selectedProduct.title} />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Agregar al carrito</button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Agregar a la lista de deseos</button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-2">{selectedProduct.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{selectedProduct.descripcion}</p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">Precio:</span>
                <span className="text-gray-600 dark:text-gray-300">{selectedProduct.precio}</span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">Disponibilidad:</span>
                <span className="text-gray-600 dark:text-gray-300">En stock</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">Procesador:</span>
              <p className="text-gray-600 dark:text-gray-300">{selectedProduct.procesador}</p>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">RAM:</span>
              <p className="text-gray-600 dark:text-gray-300">{selectedProduct.ram}</p>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">Almacenamiento:</span>
              <p className="text-gray-600 dark:text-gray-300">{selectedProduct.almacenamiento}</p>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">Pantalla:</span>
              <p className="text-gray-600 dark:text-gray-300">{selectedProduct.pantalla}</p>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">Sistema Operativo:</span>
              <p className="text-gray-600 dark:text-gray-300">{selectedProduct.sistemaOperativo}</p>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">Fecha de Lanzamiento:</span>
              <p className="text-gray-600 dark:text-gray-300">{selectedProduct.fechaLanzamiento}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${darkMode ? 'bg-gray-800 dark:bg-gray-900' : 'bg-white'}`}>
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">Productos Recomendados</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {recommendedProducts.map(product => (
            <div key={product.id} onClick={() => handleProductSelect(product)} className="cursor-pointer border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition duration-300">
              <div className="relative h-48 overflow-hidden">
                <img className="absolute inset-0 w-full h-full object-cover transition duration-300 transform hover:scale-105" src={product.image} alt={product.title} />
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-b-lg">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 text-center">{product.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">{product.precio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
