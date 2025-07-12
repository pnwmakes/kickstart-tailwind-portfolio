export default function Footer() {
    return (
        <footer className='bg-gray-100 text-center text-gray-600 py-4 mt-8'>
            <p className='text-sm'>
                &copy; {new Date().getFullYear()} My Portfolio. All rights
                reserved.
            </p>
        </footer>
    );
}
