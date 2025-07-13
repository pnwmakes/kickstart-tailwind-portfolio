import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
    const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches;
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(
        () =>
            localStorage.getItem('theme') === 'dark' ||
            (!localStorage.getItem('theme') && prefersDark)
    );

    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    const iconClass = 'h-6 w-6 transition-transform duration-300 transform';

    return (
        <nav className='bg-white dark:bg-gray-800 shadow-md transition-colors duration-300'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-20'>
                    {/* Logo */}
                    <div className='flex items-center'>
                        <Link to='/' className='flex items-center space-x-2'>
                            <img
                                src={logo}
                                alt='Logo'
                                className='h-16 w-auto transition-all duration-200 hover:opacity-90'
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className='hidden md:flex items-center justify-between space-x-6'>
                        <div className='flex space-x-6'>
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
                        </div>
                        {/* Desktop Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className='p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition'
                            aria-label='Toggle dark mode'
                        >
                            {darkMode ? (
                                <svg
                                    className={iconClass}
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                >
                                    <path d='M10 2a8 8 0 000 16 8 8 0 010-16z' />
                                </svg>
                            ) : (
                                <svg
                                    className={iconClass}
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M12 3v1m0 16v1m8.66-10H21M3 12H2m15.36 6.36l-.7.7M6.34 6.34l-.7-.7m12.02 12.02l.7.7M6.34 17.66l-.7-.7M12 5a7 7 0 0 0 0 14 7 7 0 0 1 0-14z'
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Mobile Nav */}
                    <div className='md:hidden flex items-center space-x-2'>
                        {/* Mobile Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className='p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition'
                        >
                            {darkMode ? (
                                <svg
                                    className={iconClass}
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                >
                                    <path d='M10 2a8 8 0 000 16 8 8 0 010-16z' />
                                </svg>
                            ) : (
                                <svg
                                    className={iconClass}
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M12 3v1m0 16v1m8.66-10H21M3 12H2m15.36 6.36l-.7.7M6.34 6.34l-.7-.7m12.02 12.02l.7.7M6.34 17.66l-.7-.7M12 5a7 7 0 0 0 0 14 7 7 0 0 1 0-14z'
                                    />
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

            {/* Mobile Links */}
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
