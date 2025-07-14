import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.div
            className='bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen p-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <h1 className='text-3xl font-bold'>Home Page</h1>
            <p>
                This is the home page of the application. You can toggle dark
                mode to see the effect.
            </p>
        </motion.div>
    );
}
