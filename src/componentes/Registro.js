import React, { useState } from "react";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';

const Registro = ({ darkMode, toggleDarkMode }) => {
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        email: '',
        password: '',
        confirmPassword: '',
        celular: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const responseData = await response.json();
            if (response.ok) {
                Swal.fire({
                    title: 'Usuario registrado con éxito',
                    icon: 'success'
                });
                setFormData({
                    nombres: '',
                    apellidos: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    celular: ''
                });
            } else {
                throw new Error(responseData.error || 'Error al registrar el usuario');
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                title: 'Error al registrar el usuario',
                text: error.message || 'Por favor, intenta nuevamente más tarde',
                icon: 'error'
            });
        }
    };

    const handleGoogleLogin = () => {
        alert('Redirigiendo al inicio de sesión de Google...');
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Flowbite
                </Link>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="nombres" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                    <input 
                                        type="text" 
                                        name="nombres" 
                                        id="nombres" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="First Name" 
                                        value={formData.nombres}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="apellidos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                    <input 
                                        type="text" 
                                        name="apellidos" 
                                        id="apellidos" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="Last Name" 
                                        value={formData.apellidos}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="name@company.com" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="••••••••" 
                                    value={formData.password}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input 
                                    type="password" 
                                    name="confirmPassword" 
                                    id="confirm-password" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="••••••••" 
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="celular" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                <input 
                                    type="text" 
                                    name="celular" 
                                    id="celular" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Phone Number" 
                                    value={formData.celular}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#!">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                            <button onClick={handleGoogleLogin} className="w-full bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-3">Sign up with Google</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-3">
                                Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
                <Link to="/" className="absolute top-4 left-4 text-gray-800 dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </Link>
                <button onClick={toggleDarkMode} className="absolute top-4 right-4 flex items-center text-gray-800 dark:text-white focus:outline-none">
                    {darkMode ? (
                        <FiSun className="w-5 h-5 mr-1" />
                    ) : (
                        <FiMoon className="w-5 h-5 mr-1" />
                    )}
                </button>
            </div>
        </section>
    );
}

export default Registro;
