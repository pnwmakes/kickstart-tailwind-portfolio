import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useDarkMode from '../hooks/useDarkMode';
import logo from '../assets/logo.png';

export default function Navbar() {
    const { darkMode, toggleDarkMode } = useDarkMode(); // ✅ using custom hook
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // animate after mount
        return () => clearTimeout(timer);
    }, []);

    return (
        <nav className='fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-colors duration-300'>
            <div
                className={`px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out transform ${
                    isVisible
                        ? 'translate-y-0 opacity-100'
                        : '-translate-y-8 opacity-0'
                }`}
            >
                <div className='flex items-center justify-between h-20 w-full'>
                    {/* Left: Logo + Name */}
                    <Link to='/' className='flex items-center space-x-3'>
                        <img
                            src={logo}
                            alt='Logo'
                            className='h-12 w-auto transition-all duration-200 hover:opacity-90'
                        />
                        <div className='hidden sm:block'>
                            <h1 className='text-lg font-semibold text-gray-800 dark:text-white leading-tight'>
                                James Melzark
                            </h1>
                            <p className='text-sm text-gray-500 dark:text-gray-400 leading-none'>
                                Creative Dev. Clean Code.
                            </p>
                        </div>
                    </Link>

                    {/* Desktop nav links */}
                    <div className='hidden md:flex items-center space-x-6'>
                        <Link to='/' className='nav-link'>
                            Home
                        </Link>
                        <Link to='/about' className='nav-link'>
                            About
                        </Link>
                        <Link to='/projects' className='nav-link'>
                            Projects
                        </Link>
                        <Link to='/contact' className='nav-link'>
                            Contact
                        </Link>
                        <button
                            onClick={toggleDarkMode}
                            className='p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white hover:scale-110 transition duration-200'
                            aria-label='Toggle dark mode'
                        >
                            {darkMode ? (
                                <svg
                                    className='h-6 w-6'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                >
                                    <path d='M10 2a8 8 0 000 16 8 8 0 000-16z' />
                                </svg>
                            ) : (
                                <svg
                                    className='h-6 w-6'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                >
                                    <path d='M17.293 13.293A8 8 0 016.707 2.707a8 8 0 1010.586 10.586z' />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Mobile buttons */}
                    <div className='md:hidden flex items-center space-x-2'>
                        <button
                            onClick={toggleDarkMode}
                            className='p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white hover:scale-110 transition duration-200'
                            aria-label='Toggle dark mode'
                        >
                            {darkMode ? (
                                <svg
                                    className='h-6 w-6'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                >
                                    <path d='M10 2a8 8 0 000 16 8 8 0 000-16z' />
                                </svg>
                            ) : (
                                <svg
                                    className='h-6 w-6'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                >
                                    <path d='M17.293 13.293A8 8 0 016.707 2.707a8 8 0 1010.586 10.586z' />
                                </svg>
                            )}
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='text-gray-700 dark:text-gray-200 hover:text-indigo-600'
                        >
                            {isOpen ? (
                                <svg
                                    className='h-6 w-6'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className='h-6 w-6'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M4 6h16M4 12h16M4 18h16'
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className='md:hidden px-4 pt-2 pb-4 space-y-2 transition-all duration-200'>
                    <Link to='/' className='mobile-nav-link'>
                        Home
                    </Link>
                    <Link to='/about' className='mobile-nav-link'>
                        About
                    </Link>
                    <Link to='/projects' className='mobile-nav-link'>
                        Projects
                    </Link>
                    <Link to='/contact' className='mobile-nav-link'>
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}
