import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <motion.div
            className='bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen p-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <h1 className='text-3xl font-bold'>Contact Page</h1>
            <p>
                This is the contact page of the application. You can find
                contact information and ways to get in touch with me.
            </p>
        </motion.div>
    );
}
