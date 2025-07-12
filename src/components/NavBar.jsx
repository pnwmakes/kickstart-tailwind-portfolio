import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='bg-gray-800 text-white px-4 py-2 flex gap-4'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    );
}
