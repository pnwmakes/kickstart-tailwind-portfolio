import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
    return (
        <div className='flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
            <Navbar />
            <main className='flex-grow p-4'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}
