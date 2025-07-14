import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <motion.div
            className='bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen p-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <h1 className='text-3xl font-bold'>Project Page</h1>
            <p>
                This is the projects page of the application. Here you can find
                details about various projects, their status, and other relevant
                information.
            </p>
        </motion.div>
    );
}
