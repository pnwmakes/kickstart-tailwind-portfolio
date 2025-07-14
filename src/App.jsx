import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
    const location = useLocation();

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className='flex-grow p-4 pt-24'>
                <AnimatePresence mode='wait' initial={false}>
                    <Routes location={location} key={location.pathname}>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/projects' element={<Projects />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
}
