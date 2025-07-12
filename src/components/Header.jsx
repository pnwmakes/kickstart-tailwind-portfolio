import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className='bg-white shadow-md'>
            <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
                <Link to='/' className='text-xl font-bold text-gray-800'>
                    My Portfolio
                </Link>
                <nav className='space-x-4'>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive
                                ? 'text-blue-600 font-semibold'
                                : 'text-gray-700 hover:text-blue-600'
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to='/about'
                        className={({ isActive }) =>
                            isActive
                                ? 'text-blue-600 font-semibold'
                                : 'text-gray-700 hover:text-blue-600'
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to='/projects'
                        className={({ isActive }) =>
                            isActive
                                ? 'text-blue-600 font-semibold'
                                : 'text-gray-700 hover:text-blue-600'
                        }
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) =>
                            isActive
                                ? 'text-blue-600 font-semibold'
                                : 'text-gray-700 hover:text-blue-600'
                        }
                    >
                        Contact
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
