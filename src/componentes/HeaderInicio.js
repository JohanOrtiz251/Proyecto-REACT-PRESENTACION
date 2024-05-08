import React, { useState, useEffect } from "react";
import { FiSun, FiMoon, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

function HeaderInicio({ darkMode, toggleDarkMode, cart }) {
    const [scrolling, setScrolling] = useState(false);
    const cookies = new Cookies(); 

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    
    const user = {
        nombres: cookies.get('nombres'),
        apellidos: cookies.get('apellidos'),
        email: cookies.get('email')
    };

    const cerrarSesion = () => {
        cookies.remove('email');
        cookies.remove('nombres');
        cookies.remove('apellidos');
        cookies.remove('token');
        window.location.href = '/'; 
    };

    return (
        <header className={`fixed top-0 w-full z-10 ${scrolling ? 'bg-white shadow-md' : 'bg-transparent'} transition duration-300 ease-in-out`}>
            <nav className={`border-gray-200 px-4 lg:px-6 py-2.5 ${darkMode ? 'dark:bg-gray-800' : ''}`}>
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="https://flowbite.com" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <div className="flex items-center justify-center lg:order-2">
                        <form className="max-w-lg mx-auto">   
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative flex">
                                <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-80 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Products, Logos..." required />
                                
                            </div>
                        </form>
                    </div>
                    <div className="flex items-center lg:order-3">
                        {user.email ? (
                            <div className="mr-1 flex items-center">
                                <span className="text-gray-800 dark:text-white mr-5">{user.nombres} {user.apellidos}</span>
                                <button onClick={cerrarSesion} className="text-red-700 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-1 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                                    Cerrar sesión
                                </button>
                            </div>
                        ) : null}
                        <Link to="/cart" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                            <div className="flex items-center">
                                <FiShoppingCart className="w-5 h-5 mr-1" />
                                <span>{cart?.length ?? 0}</span> {/* Mostrar el número de elementos en el carrito */}
                            </div>
                        </Link>
                        <button onClick={toggleDarkMode} className="flex items-center ml-2 text-gray-800 dark:text-white focus:outline-none">
                            {darkMode ? (
                                <FiSun className="w-5 h-5 mr-1" />
                            ) : (
                                <FiMoon className="w-5 h-5 mr-1" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default HeaderInicio;
