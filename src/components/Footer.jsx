export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className='border-t border-border py-8 mt-4'>
            <div className='max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3'>
                <p className='font-mono text-gray-600 text-xs'>© {year} Rafael Domiciano Maia Mateus — Built with React & TailwindCSS</p>
                <p className='font-mono text-gray-700 text-xs'>
                    rm<span className='text-accent'>.</span>dev
                </p>
            </div>
        </footer>
    );
}
