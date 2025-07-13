import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/projects', label: 'Projects' },
        { to: '/contact', label: 'Contact' },
    ];

    const navLinkClass = ({ isActive }) =>
        isActive
            ? 'text-blue-600 font-semibold underline underline-offset-4'
            : 'text-gray-800 hover:text-blue-500';

    return (
        <nav className='bg-white shadow-md sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16'>
                <div className='text-2xl font-bold text-gray-800'>
                    MyPortfolio
                </div>
                {/* Mobile toggle */}
                <div className='md:hidden'>
                    <button
                        onClick={toggleMenu}
                        className='text-gray-800 focus:outline-none'
                        aria-label='Toggle navigation'
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                {/* Desktop Nav */}
                <div className='hidden md:flex space-x-6'>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={navLinkClass}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            </div>
            {/* Mobile Nav */}
            {menuOpen && (
                <div className='md:hidden px-4 pb-4 flex flex-col space-y-2 bg-white shadow-md'>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={navLinkClass}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    );
}
